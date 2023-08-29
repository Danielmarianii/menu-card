        // window.onhashchange = function(e) {
        //     const oldURL = e.oldURL.split('#')[1]
        //     const newURL = e.newURL.split('#')[1]
        //     const oldLink = document.querySelector(`.menu a[href='#${oldURL}']`)
        //     const newLink = document.querySelector(`.menu a[href='#${newURL}']`)
        //     oldLink && oldLink.classList.remove('selected')
        //     newLink && newLink.classList.add('selected')
        // }

        document.addEventListener("DOMContentLoaded", function () {
            const hashChangeHandler = function () {
                const currentHash = window.location.hash.slice(1)
                const links = document.querySelectorAll(".menu a")
                links.forEach(link => {
                    const linkHash = link.getAttribute("href").slice(1)
                    if (currentHash == linkHash) {
                        link.classList.add("selected")
                    } else {
                        link.classList.remove("selected")
                    }
                })
            }

            window.addEventListener("hashchange", hashChangeHandler)
            hashChangeHandler()
        })