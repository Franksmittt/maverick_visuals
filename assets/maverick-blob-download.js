/**
 * Mobile-friendly PNG save: Web Share (files) when available, else <a download>.
 */
(function (global) {
    function anchorSave(blob, filename) {
        return new Promise(function (resolve, reject) {
            try {
                var url = URL.createObjectURL(blob);
                var a = document.createElement('a');
                a.href = url;
                a.download = filename;
                a.setAttribute('download', filename);
                a.rel = 'noopener';
                a.style.position = 'fixed';
                a.style.left = '-9999px';
                document.body.appendChild(a);
                a.click();
                setTimeout(function () {
                    URL.revokeObjectURL(url);
                    if (a.parentNode) a.parentNode.removeChild(a);
                    resolve();
                }, 3500);
            } catch (e) {
                reject(e);
            }
        });
    }

    function saveBlob(blob, filename) {
        var type = (blob && blob.type) || 'image/png';
        var file = new File([blob], filename, { type: type });
        if (
            typeof navigator !== 'undefined' &&
            typeof navigator.canShare === 'function' &&
            navigator.canShare({ files: [file] })
        ) {
            return navigator
                .share({ files: [file], title: filename })
                .catch(function () {
                    return anchorSave(blob, filename);
                });
        }
        return anchorSave(blob, filename);
    }

    global.MaverickSaveBlob = { save: saveBlob };
})(typeof window !== 'undefined' ? window : this);
