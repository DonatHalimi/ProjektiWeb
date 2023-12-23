using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;

namespace ProjektiWebW23G10.Controllers
{
    [Authorize(Roles = "Admin")]
    public class AppRolesController : Controller
    {
        private readonly RoleManager<IdentityRole> _roleManager;

        public AppRolesController(RoleManager<IdentityRole> roleManager)
        {
            _roleManager = roleManager;
        }

        // Nese dojme qe edhe useri ta shoh listen e roleve / ndonje liste tjeter e shtojme keshtu ", User"
        // [Authorize(Roles = "Admin, User")]
        public IActionResult Index()
        {
            var roles = _roleManager.Roles;
            return View(roles);
        }

        [HttpGet]
        public IActionResult Create()
        {
            return View();
        }

        [HttpPost]
        public async Task<IActionResult> Create(IdentityRole model)
        {
            // avoid duplicate role
            if (!_roleManager.RoleExistsAsync(model.Name).GetAwaiter().GetResult())
            {
                _roleManager.CreateAsync(new IdentityRole(model.Name)).GetAwaiter().GetResult();
            }

            return RedirectToAction("Index");
        }

        [HttpGet]
        // GET: AppRoles/Edit/5
        public async Task<IActionResult> Edit(string id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var role = await _roleManager.FindByIdAsync(id);
            if (role == null)
            {
                return NotFound();
            }

            return View(role);
        }

        // POST: AppRoles/Edit/5
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Edit(string id, [Bind("Id,Name")] IdentityRole model)
        {
            if (id != model.Id)
            {
                return NotFound();
            }

            if (ModelState.IsValid)
            {
                try
                {
                    var role = await _roleManager.FindByIdAsync(id);
                    role.Name = model.Name;
                    await _roleManager.UpdateAsync(role);
                }
                catch (DbUpdateConcurrencyException)
                {
                    if (!RoleExists(id))
                    {
                        return NotFound();
                    }
                    else
                    {
                        throw;
                    }
                }
                return RedirectToAction(nameof(Index));
            }
            return View(model);
        }

        [HttpGet]
        // GET: AppRoles/Details/5
        public async Task<IActionResult> Details(string id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var role = await _roleManager.FindByIdAsync(id);
            if (role == null)
            {
                return NotFound();
            }

            return View(role);
        }

        private bool RoleExists(string id)
        {
            return _roleManager.RoleExistsAsync(id).GetAwaiter().GetResult();
        }

        [HttpGet]
        // GET: AppRoles/Delete/5
        public IActionResult Delete(string id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var role = _roleManager.FindByIdAsync(id).GetAwaiter().GetResult();
            if (role == null)
            {
                return NotFound();
            }

            return View(role);
        }

        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public IActionResult DeleteConfirmed(string id)
        {
            try
            {
                var role = _roleManager.FindByIdAsync(id).GetAwaiter().GetResult();

                if (role != null)
                {
                    var result = _roleManager.DeleteAsync(role).GetAwaiter().GetResult();

                    if (result.Succeeded)
                    {
                        TempData["successMessage"] = "Role has been deleted successfully.";
                        return RedirectToAction(nameof(Index));
                    }
                    else
                    {
                        TempData["errorMessage"] = "Failed to delete role.";
                        return RedirectToAction(nameof(Index));
                    }
                }
                else
                {
                    TempData["errorMessage"] = "Role not found.";
                    return RedirectToAction(nameof(Index));
                }
            }
            catch (Exception ex)
            {
                TempData["errorMessage"] = ex.Message;
                return RedirectToAction(nameof(Index));
            }
        }

    }
}
