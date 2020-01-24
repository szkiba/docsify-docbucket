// should move to dedicated plugin...
$docsify.plugins = [].concat($docsify.plugins, function (hook, vm) {

    let saved = {};

    hook.beforeEach(function (content) {
        if (saved.logo) {
            getLogo().src = saved.logo;
            getAppNameLink().href = saved.href;
            delete saved.logo;
            delete saved.href;
        }
        if (saved.icon) {
            getIcon().href = saved.icon;
            delete saved.icon;
        }
        return content;
    });

    hook.doneEach(function () {
        var meta = vm.frontmatter;

        if (! meta) {
            return;
        }

        if (meta.logo) {
            var logo = getLogo();
            if (logo) {
                saved.logo = logo.src;
                logo.src = resolve(meta.logo);
                var link = getAppNameLink();
                saved.href = link.href;
                link.href = "#" + vm.route.path;
            }
        }

        if (meta.icon) {
            var icon = getIcon();
            if (icon) {
                saved.icon = icon.href;
                icon.href = resolve(meta.icon);
            }
        }
    });

    function resolve(url) {
        return /^(http[s]?|data):.*/.test(url) ? url : (vm.route.path.substr(1) + url);
    }

    function getAppNameLink() {
        return document.querySelector("a.app-name-link");
    }

    function getLogo() {
        return document.querySelector("a.app-name-link img");
    }

    function getIcon() {
        return document.querySelector("link[rel='icon'],link[rel='shortcut icon']");
    }

});
