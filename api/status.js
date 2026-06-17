function checkUserAccess() {
  // TODO: Integrar com API de verificação de acesso
  return false;
}

module.exports = (req, res) => {
  const hasAccess = checkUserAccess();

  res.status(200).json({
    access: hasAccess,
    status: hasAccess ? "active" : "blocked",
  });
};
