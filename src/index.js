$docsify.plugins = [].concat($docsify.plugins, function (hook, vm) {
    hook.init(function () {

        if (!window.$docsify.docbucket) {
            window.$docsify.docbucket = {};
        }

        if (!window.DocsifyBitbucket) {
            console.log("Missing docsify-bitbucket plugin! Add <script src='//unpkg.com/docsify-bitbucket'></script> tag before this plugin!");
            window.$docsify.docbucket.disabled = true;
            return;
        }

        if (!window.DocsifyBitbucket.project) {
            console.log("Only Bitbucket Server repository supported!");
            window.$docsify.docbucket.disabled = true;
            return;
        }

        if (!window.$docsify.loadNavbar && !window.$docsify.docbucket.noNavbar) {
            window.$docsify.loadNavbar = "_navbar.md";
            if (!window.$docsify.alias) {
                window.$docsify.alias = {};
            }
            window.$docsify.alias['/_navbar.md'] = window.DocsifyBitbucket.resolve('/;r=doc/_navbar.md');
        }

        if (!window.$docsify.docbucket.noStyle) {
            var style = document.createElement("link");
            style.setAttribute("rel", "stylesheet");
            style.setAttribute("type", "text/css");
            style.setAttribute("href", window.DocsifyBitbucket.resolve('/;r=doc/style.css'));
            document.getElementsByTagName('head')[0].appendChild(style);
        }

        if (window.$docsify.docbucket.loadScript) {
            var src = typeof window.$docsify.docbucket.loadScript == 'string' ? window.$docsify.docbucket.loadScript : '/;r=doc/script.js';
            var script = document.createElement("script");
            script.setAttribute("type", "text/javascript");
            script.setAttribute("src", window.DocsifyBitbucket.resolve(src));
            document.getElementsByTagName('body')[0].appendChild(script);
        }
    });

});
