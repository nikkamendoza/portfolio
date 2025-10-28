module.exports = async (req, res) => {
  res.status(200).json({ success: true, message: 'Serverless API is running', timestamp: new Date().toISOString() });
};


