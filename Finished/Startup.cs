using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(Finished.Startup))]
namespace Finished
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
