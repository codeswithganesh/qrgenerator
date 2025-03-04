const qr = require('qr-image');
const express = require('express');
const router = express.Router();

// Handle QR code generation
router.post('/generateQr', (req, res) => {
  const url = req.body.url;
  console.log(url);

  if (!url) {
    return res.status(400).json({ error: 'URL is required' });
  }

  try {
    // Generate QR code as a PNG image
    const qr_png = qr.imageSync(url, { type: 'png' });

    // Set the response headers for a PNG image
    res.setHeader('Content-Type', 'image/png');
    res.send(qr_png); // Send the binary image data
  } catch (error) {
    console.error('Error generating QR code:', error);
    res.status(500).json({ error: 'Failed to generate QR code' });
  }
});

module.exports = router;