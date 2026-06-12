import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader.js';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const MODEL_PATH = `${import.meta.env.BASE_URL}assets/models/962-frame.obj`;

const STORY_STEPS = [
  {
    kicker: 'Product Showcase',
    title: '962 Frame',
    text: 'A premium scroll-led reveal built around the 9SIXTY frame geometry.',
  },
  {
    kicker: 'Detail View',
    title: 'Engineered Form',
    text: 'Scroll motion rotates the frame and moves the camera closer to highlight the structure.',
  },
  {
    kicker: 'Material Focus',
    title: 'Carbon-Look Finish',
    text: 'Controlled lighting, shadows and clearcoat material give the frame a refined product feel.',
  },
  {
    kicker: 'Garage Ready',
    title: 'Built To Stand Out',
    text: 'Use the final frame for product specs, enquiries or a direct path into the collection.',
  },
];

export default function ProductScrollShowcase({ nav }) {
  const sectionRef = useRef(null);
  const canvasRef = useRef(null);
  const modelRef = useRef(null);
  const cameraRef = useRef(null);
  const rendererRef = useRef(null);
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const section = sectionRef.current;
    const canvas = canvasRef.current;
    if (!section || !canvas) return undefined;

    const scene = new THREE.Scene();
    scene.background = new THREE.Color('#05070d');

    const camera = new THREE.PerspectiveCamera(38, window.innerWidth / window.innerHeight, 0.1, 100);
    camera.position.set(0, 0.25, 4.2);
    cameraRef.current = camera;

    const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    rendererRef.current = renderer;

    const hemi = new THREE.HemisphereLight('#ffffff', '#1d2433', 2.1);
    scene.add(hemi);

    const key = new THREE.DirectionalLight('#ffffff', 3.2);
    key.position.set(3, 4, 5);
    key.castShadow = true;
    scene.add(key);

    const rim = new THREE.DirectionalLight('#A6936F', 2.2);
    rim.position.set(-4, 1.5, -3);
    scene.add(rim);

    const floor = new THREE.Mesh(
      new THREE.PlaneGeometry(8, 8),
      new THREE.ShadowMaterial({ opacity: 0.22 }),
    );
    floor.rotation.x = -Math.PI / 2;
    floor.position.y = -1.2;
    floor.receiveShadow = true;
    scene.add(floor);

    const loader = new OBJLoader();
    loader.load(
      MODEL_PATH,
      (object) => {
        const box = new THREE.Box3().setFromObject(object);
        const center = box.getCenter(new THREE.Vector3());
        const size = box.getSize(new THREE.Vector3());
        const scale = 2.25 / Math.max(size.x, size.y, size.z);

        object.position.sub(center);
        object.scale.setScalar(scale);
        object.rotation.set(-0.12, -0.65, 0.05);

        const carbonMaterial = new THREE.MeshPhysicalMaterial({
          color: '#141821',
          metalness: 0.35,
          roughness: 0.3,
          clearcoat: 0.8,
          clearcoatRoughness: 0.18,
        });

        object.traverse((child) => {
          if (child.isMesh) {
            child.material = carbonMaterial;
            child.castShadow = true;
            child.receiveShadow = true;
          }
        });

        modelRef.current = object;
        scene.add(object);
      },
      undefined,
      (error) => console.error('Could not load OBJ model:', error),
    );

    const scrollState = { progress: 0 };
    const trigger = ScrollTrigger.create({
      trigger: section,
      start: 'top top',
      end: 'bottom bottom',
      scrub: true,
      onUpdate: (self) => {
        scrollState.progress = self.progress;
        setActiveStep(Math.min(STORY_STEPS.length - 1, Math.floor(self.progress * STORY_STEPS.length)));
      },
    });

    let animationFrame;
    const render = () => {
      animationFrame = requestAnimationFrame(render);
      const p = scrollState.progress;
      const model = modelRef.current;
      const cam = cameraRef.current;

      if (model) {
        model.rotation.y = -0.65 + p * Math.PI * 2.25;
        model.rotation.x = -0.12 + Math.sin(p * Math.PI) * 0.28;
        model.position.x = THREE.MathUtils.lerp(0.55, -0.5, p);
        model.position.y = THREE.MathUtils.lerp(-0.05, 0.12, p);
        model.scale.setScalar(THREE.MathUtils.lerp(1, 1.18, Math.sin(p * Math.PI)));
      }

      cam.position.z = THREE.MathUtils.lerp(4.2, 3.25, p);
      cam.position.y = THREE.MathUtils.lerp(0.25, 0.05, p);
      cam.lookAt(0, 0, 0);
      renderer.render(scene, cam);
    };
    render();

    const resize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
      ScrollTrigger.refresh();
    };
    window.addEventListener('resize', resize);

    return () => {
      cancelAnimationFrame(animationFrame);
      window.removeEventListener('resize', resize);
      trigger.kill();
      renderer.dispose();
      scene.traverse((obj) => {
        if (obj.geometry) obj.geometry.dispose();
        if (obj.material) {
          if (Array.isArray(obj.material)) obj.material.forEach((material) => material.dispose());
          else obj.material.dispose();
        }
      });
    };
  }, []);

  const step = STORY_STEPS[activeStep];

  return (
    <section ref={sectionRef} className="product-showcase" aria-label="962 frame product showcase">
      <canvas ref={canvasRef} className="product-showcase__canvas" />

      <div className="product-showcase__sticky-copy">
        <p className="product-showcase__eyebrow">{step.kicker}</p>
        <h1>{step.title}</h1>
        <p>{step.text}</p>
        <button type="button" className="product-showcase__button" onClick={() => nav('/shop')}>Shop collection</button>
      </div>

      <div className="product-showcase__scroll-steps" aria-hidden="true">
        {STORY_STEPS.map((item) => (
          <div className="product-showcase__step" key={item.title} />
        ))}
      </div>
    </section>
  );
}
