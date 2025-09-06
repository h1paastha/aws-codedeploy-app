export default function handler(req, res) {
  res.status(200).json({ 
    message: 'HackerOne API Test',
    timestamp: new Date().toISOString()
  });
}
