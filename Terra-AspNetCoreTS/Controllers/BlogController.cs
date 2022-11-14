using Microsoft.AspNetCore.Mvc;

namespace Terra-AspNetCoreTS.Controllers
{
    public class BlogController : Controller
{
    public IActionResult Index()
    {
        return View();
    }
}
}
