const apiVersoning = (version) => (req, res, next) => {
  const normalized = String(version).startsWith("v")
    ? String(version).slice(1)
    : String(version);
  const urlToCheck = req.originalUrl || req.url;
  if (urlToCheck.startsWith(`/api/v${normalized}`)) {
    return next();
  }
  res.status(404).json({
    success: false,
    message: `API version ${version} not found`,
  });
};
const headerVersioning = (version) => (req, res, next) => {
  const header = req.headers["accept-version"];
  if (header === version) {
    return next();
  }
  res.status(404).json({
    success: false,
    message: `API version ${version} not found`,
  });
};

const contentTypeVersioning = (version) => (req, res, next) => {
  const contentType = req.headers["content-type"];
  if (contentType === `application/vnd.myapi.v${version}+json`) {
    return next();
  }
  res.status(404).json({
    success: false,
    message: `API version ${version} not found`,
  });
};
module.exports = {
  apiVersoning,
  headerVersioning,
  contentTypeVersioning,
};
