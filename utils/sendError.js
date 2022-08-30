export default sendError = (res, err, status) => {
  logToFile(err);
  res.status(status || 500).json({
    status: 'error',
    err: err.message ? err.message : err.error,
    timestamp: new Date(),
  });
};