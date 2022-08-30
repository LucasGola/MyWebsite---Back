export default sendSuccess = (res, data, status, numberOfRows) => {
  let qty = 0;
  if (data && data.length) {
    qty = data.length;
    if (!status) status = 200;
  }
  res.status(status || 200).json({
    status: 'ok',
    data,
    timestamp: new Date(),
    numberOfRows: numberOfRows || qty,
  });
};
