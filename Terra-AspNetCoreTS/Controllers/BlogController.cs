using Microsoft.AspNetCore.Mvc;

namespace TerraAspNetCoreTS.Controllers
{
    public class BlogController : Controller
{
    public IActionResult Index()
    {
        return View();
    }
}
}
