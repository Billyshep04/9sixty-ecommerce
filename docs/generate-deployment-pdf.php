<?php

require __DIR__ . '/../backend/vendor/autoload.php';

use Dompdf\Dompdf;

$markdown = file_get_contents(__DIR__ . '/9SIXTY-cPanel-Deployment-Guide.md');
$html = '<html><head><style>body{font-family:DejaVu Sans,sans-serif;color:#171717;line-height:1.5}h1,h2{color:#000}h1{font-size:26px}h2{font-size:18px;margin-top:24px}pre{background:#f1f1f1;padding:10px;border-radius:4px;white-space:pre-wrap}code{font-family:DejaVu Sans Mono,monospace}</style></head><body>';
$lines = explode("\n", $markdown);
$inPre = false;
foreach ($lines as $line) {
    if (str_starts_with($line, '```')) {
        $html .= $inPre ? '</pre>' : '<pre>';
        $inPre = ! $inPre;
        continue;
    }
    if ($inPre) {
        $html .= htmlspecialchars($line) . "\n";
        continue;
    }
    if (str_starts_with($line, '# ')) {
        $html .= '<h1>' . htmlspecialchars(substr($line, 2)) . '</h1>';
    } elseif (str_starts_with($line, '## ')) {
        $html .= '<h2>' . htmlspecialchars(substr($line, 3)) . '</h2>';
    } elseif (str_starts_with($line, '- ')) {
        $html .= '<p>&bull; ' . htmlspecialchars(substr($line, 2)) . '</p>';
    } elseif (trim($line) !== '') {
        $html .= '<p>' . htmlspecialchars($line) . '</p>';
    }
}
$html .= '</body></html>';

$pdf = new Dompdf();
$pdf->loadHtml($html);
$pdf->setPaper('A4');
$pdf->render();
file_put_contents(__DIR__ . '/9SIXTY-cPanel-Deployment-Guide.pdf', $pdf->output());
