exports.exportPathMap = () => ({
  "/": { page: "/index" },
  "/index": { page: "/index", query: { title: "index" } },
  "/login": { page: "/login", query: { title: "login" } },
  "/activate-account-error": { page: "/activate-account-error", query: { title: "Error en la activacion de la cuenta" } },
  "/activate-account-success": { page: "/activate-account-success", query: { title: "Activacion de la cuenta existosa" } },
  "/sentInformationOk": { page: "/sentInformationOk", query: { title: "Envio existosa de la informacion" } },
  "/validate-account": { page: "/validate-account", query: { title: "Validacion de la cuenta" } },
  "/dashboard": { page: "/dashboard", query: { title: "dashboard" } }
})
