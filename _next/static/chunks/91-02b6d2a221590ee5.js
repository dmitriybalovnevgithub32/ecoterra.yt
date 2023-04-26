(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [91], {
        81960: function(e, t, a) {
            "use strict";
            a.d(t, {
                Z: function() {
                    return m
                }
            });
            var r = a(85893),
                s = a(22754),
                l = a(71083),
                n = a(64981),
                o = a(67294),
                i = a(77922);
            let c = {
                    support: [{
                        name: "Str. Potcoavei, No 5, Voluntari, Ilfov, Romania",
                        href: "#",
                        target: "",
                        rel: ""
                    }, {
                        name: "Nyon, Vaud, Switzerland",
                        href: "#",
                        target: "",
                        rel: ""
                    }],
                    company: [{
                        name: "About",
                        href: "#",
                        target: "",
                        rel: ""
                    }, {
                        name: "Whitepaper",
                        href: "/documents/whitepaper-ecoterra.pdf",
                        target: "_blank",
                        rel: "noopener noreferrer"
                    }],
                    legal: [{
                        name: "Terms and conditions",
                        href: "/legal/term-and-conditions-ecoterra.pdf",
                        target: "_blank",
                        rel: "noopener noreferrer"
                    }, {
                        name: "Risk policy and disclosure",
                        href: "/legal/risk-policy-and-disclosure-ecoterra.pdf",
                        target: "_blank",
                        rel: "noopener noreferrer"
                    }, {
                        name: "Privacy policy",
                        href: "/legal/privacy-policy-ecoterra.pdf",
                        target: "_blank",
                        rel: "noopener noreferrer"
                    }]
                },
                d = async e => {
                    try {
                        await navigator.clipboard.writeText(e)
                    } catch (t) {
                        console.error("Failed to copy text: ", t)
                    }
                };

            function m(e) {
                let {
                    langFile: t
                } = e;
                t && (c.company[0].name = t.footer.about, c.legal[0].name = t.footer.terms, c.legal[1].name = t.footer.risk, c.legal[2].name = t.footer.privacy);
                let [a, m] = (0, o.useState)(!1);
                return (0, r.jsxs)("footer", {
                    className: "mt-44 bg-gradient-to-br from-indigo-800 to-indigo-600",
                    "aria-labelledby": "footer-heading",
                    children: [(0, r.jsx)("h2", {
                        id: "footer-heading",
                        className: "sr-only",
                        children: "Footer"
                    }), (0, r.jsx)("div", {
                        className: "px-6 lg:px-8",
                        children: (0, r.jsx)("div", {
                            className: "container mx-auto pb-8 pt-16 sm:pt-24 lg:pt-32",
                            children: (0, r.jsxs)("div", {
                                className: "relative pt-20",
                                children: [(0, r.jsx)("div", {
                                    className: "relative -mt-72 mb-20 w-full rounded-3xl bg-gradient-to-br from-sky-100 to-sky-300 p-5 sm:p-10",
                                    children: (0, r.jsxs)("div", {
                                        className: "grid grid-cols-2 gap-y-5 gap-x-2 md:gap-y-7 lg:grid-cols-4",
                                        children: [(0, r.jsxs)("div", {
                                            className: "col-span-full text-center",
                                            children: [(0, r.jsx)("p", {
                                                className: "text-md font-medium text-slate-700 sm:text-xl",
                                                children: t ? t.footer.contract.address : "Contract Address"
                                            }), (0, r.jsxs)("div", {
                                                className: "flex items-center justify-center gap-x-2",
                                                children: [(0, r.jsxs)("p", {
                                                    className: "text-lg font-bold text-main-color sm:text-xl",
                                                    children: [(0, r.jsx)("span", {
                                                        className: "hidden md:inline-block",
                                                        children: "0x982b50E55394641cA975a0eEc630b120b671391a"
                                                    }), (0, r.jsx)("span", {
                                                        className: "inline-block md:hidden",
                                                        children: "0x982...391a"
                                                    })]
                                                }), a ? (0, r.jsx)(s, {
                                                    className: "h-8 w-8 rounded-md p-1 text-green-700",
                                                    strokeWidth: 2.5
                                                }) : (0, r.jsx)(l, {
                                                    className: "h-8 w-8 cursor-pointer rounded-md p-1 text-main-color hover:bg-sky-700/10",
                                                    strokeWidth: 2,
                                                    onClick: () => {
                                                        d("0x982b50E55394641cA975a0eEc630b120b671391a"), m(!0), setTimeout(() => {
                                                            m(!1)
                                                        }, 2e3)
                                                    }
                                                })]
                                            }), (0, r.jsxs)("p", {
                                                className: "text-md font-medium text-main-color/30 sm:text-lg",
                                                children: [" ", "Do not sends any funds to this address! They will be lost forever!"]
                                            })]
                                        }), (0, r.jsxs)("div", {
                                            className: "col-span-1 text-center",
                                            children: [(0, r.jsx)("p", {
                                                className: "text-md font-medium text-slate-700 sm:text-xl",
                                                children: t ? t.footer.contract.symbol : "Symbol"
                                            }), (0, r.jsx)("p", {
                                                className: "text-lg font-bold text-main-color sm:text-xl",
                                                children: "ECOTERRA"
                                            })]
                                        }), (0, r.jsxs)("div", {
                                            className: "col-span-1 text-center",
                                            children: [(0, r.jsx)("p", {
                                                className: "text-md font-medium text-slate-700 sm:text-xl",
                                                children: t ? t.footer.contract.decimals : "Decimals"
                                            }), (0, r.jsx)("p", {
                                                className: "text-lg font-bold text-main-color sm:text-xl",
                                                children: "9"
                                            })]
                                        }), (0, r.jsxs)("div", {
                                            className: "col-span-1 text-center",
                                            children: [(0, r.jsx)("p", {
                                                className: "text-md font-medium text-slate-700 sm:text-xl",
                                                children: t ? t.footer.contract.network : "Network"
                                            }), (0, r.jsxs)("p", {
                                                className: "text-lg font-bold text-main-color sm:text-xl",
                                                children: [(0, r.jsx)("span", {
                                                    className: "hidden sm:inline-block",
                                                    children: "Ethereum ERC-20"
                                                }), (0, r.jsx)("span", {
                                                    className: "inline-block sm:hidden",
                                                    children: "ERC-20"
                                                })]
                                            })]
                                        }), (0, r.jsxs)("div", {
                                            className: "col-span-1 text-center",
                                            children: [(0, r.jsx)("p", {
                                                className: "text-md font-medium text-slate-700 sm:text-xl",
                                                children: t ? t.footer.contract.supply : "Supply"
                                            }), (0, r.jsxs)("p", {
                                                className: "text-lg font-bold text-main-color sm:text-xl",
                                                children: [(0, r.jsx)("span", {
                                                    className: "hidden sm:inline-block",
                                                    children: "2,000,000,000"
                                                }), (0, r.jsx)("span", {
                                                    className: "inline-block sm:hidden",
                                                    children: "2B"
                                                })]
                                            })]
                                        })]
                                    })
                                }), (0, r.jsxs)("div", {
                                    className: "xl:flex xl:justify-start xl:gap-44 ",
                                    children: [(0, r.jsxs)("div", {
                                        className: "max-w-sm space-y-8",
                                        children: [(0, r.jsx)("a", {
                                            href: "#",
                                            className: "",
                                            children: (0, r.jsx)("img", {
                                                className: "h-12",
                                                src: "/logo/logo-dark-bg.svg",
                                                alt: ""
                                            })
                                        }), (0, r.jsx)("p", {
                                            className: "text-sm leading-6 text-gray-200",
                                            children: t ? t.hero.subtitle : "All-in-one Recycle2Earn app featuring recycling tokens and ecology actions. Recycled Materials & Carbon Offset marketplaces and more — for empowering companies and rewarding consumers."
                                        }), (0, r.jsx)(i.Z, {}), (0, r.jsx)("p", {
                                            className: "text-sm leading-6 text-gray-200",
                                            children: "contact@ecoterra.io"
                                        }), (0, r.jsx)("p", {
                                            className: "text-sm leading-6 text-gray-200",
                                            children: "\xa9 2023 ecoterra.io | All rights reserved."
                                        })]
                                    }), (0, r.jsx)("div", {
                                        className: "grow",
                                        children: (0, r.jsx)("div", {
                                            className: "mt-16 xl:col-span-2 xl:mt-0",
                                            children: (0, r.jsxs)("div", {
                                                className: "md:grid md:grid-cols-3 md:gap-8",
                                                children: [(0, r.jsxs)("div", {
                                                    children: [(0, r.jsx)("h3", {
                                                        className: "text-xl font-semibold leading-6 text-white",
                                                        children: t ? t.footer.company : "Company"
                                                    }), (0, r.jsxs)("ul", {
                                                        role: "list",
                                                        className: "mt-6 space-y-4",
                                                        children: [(0, r.jsx)("li", {
                                                            children: (0, r.jsxs)("a", {
                                                                href: "#",
                                                                target: "",
                                                                rel: "",
                                                                className: "text-md leading-6 text-gray-200 hover:text-white",
                                                                children: ["EARTHUP SRL", (0, r.jsx)("br", {}), "45107385"]
                                                            })
                                                        }), c.company.map(e => (0, r.jsx)("li", {
                                                            children: (0, r.jsx)("a", {
                                                                href: e.href,
                                                                target: e.target,
                                                                rel: e.rel,
                                                                className: "text-md leading-6 text-gray-200 hover:text-white",
                                                                children: e.name
                                                            })
                                                        }, e.name))]
                                                    })]
                                                }), (0, r.jsxs)("div", {
                                                    className: "mt-10 md:mt-0",
                                                    children: [(0, r.jsx)("h3", {
                                                        className: "text-xl font-semibold leading-6 text-white",
                                                        children: t ? t.footer.legal : "Legal"
                                                    }), (0, r.jsx)("ul", {
                                                        role: "list",
                                                        className: "mt-6 space-y-4",
                                                        children: c.legal.map(e => (0, r.jsx)("li", {
                                                            children: (0, r.jsx)("a", {
                                                                href: e.href,
                                                                target: e.target,
                                                                rel: e.rel,
                                                                className: "text-md leading-6 text-gray-200 hover:text-white",
                                                                children: e.name
                                                            })
                                                        }, e.name))
                                                    })]
                                                }), (0, r.jsxs)("div", {
                                                    className: "mt-10 md:mt-0",
                                                    children: [(0, r.jsx)("div", {
                                                        className: "text-white",
                                                        children: (0, r.jsx)(n, {
                                                            className: "h-6 w-6"
                                                        })
                                                    }), (0, r.jsx)("ul", {
                                                        role: "list",
                                                        className: "mt-6 space-y-4",
                                                        children: c.support.map(e => (0, r.jsx)("li", {
                                                            children: (0, r.jsx)("a", {
                                                                href: e.href,
                                                                target: e.target,
                                                                rel: e.rel,
                                                                className: "text-md leading-6 text-gray-200 hover:text-white",
                                                                children: e.name
                                                            })
                                                        }, e.name))
                                                    })]
                                                })]
                                            })
                                        })
                                    })]
                                }), (0, r.jsx)("div", {
                                    className: "mt-16 border-t border-white/10 pt-8 sm:mt-20 lg:mt-24",
                                    children: (0, r.jsx)("p", {
                                        className: "text-center text-xs leading-5 text-white",
                                        children: t ? t.footer.disclaimer : "Disclaimer: Digital currencies may be unregulated in your jurisdiction. The value of digital currencies may go down as well as up. Profits may be subject to capital gains or other taxes applicable in your jurisdiction."
                                    })
                                })]
                            })
                        })
                    })]
                })
            }
        },
        12531: function(e, t, a) {
            "use strict";
            a.d(t, {
                Z: function() {
                    return d
                }
            });
            var r = a(85893),
                s = a(67294),
                l = a(10271),
                n = a(84539),
                o = a(24819),
                i = a(43035);

            function c(e) {
                return "en" === e ? "gb" : e
            }

            function d(e) {
                let {
                    language: t,
                    setLanguage: a,
                    languageOptions: d,
                    position: m = "right"
                } = e;
                return (0, r.jsxs)(l.v, {
                    as: "div",
                    className: "relative inline-block text-left",
                    children: [(0, r.jsx)("div", {
                        children: (0, r.jsxs)(l.v.Button, {
                            className: "inline-flex w-full justify-center rounded-lg py-2 px-3 text-sm font-semibold leading-6 text-slate-800 transition-colors hover:bg-slate-400/10 ring-1 ring-gray-900/10 hover:ring-gray-900/20",
                            children: [(0, r.jsxs)("div", {
                                className: "flex justify-center gap-1",
                                children: [(0, r.jsx)("span", {
                                    className: "fi fi-".concat(c(t), " mr-1")
                                }), (0, r.jsx)("span", {
                                    className: "uppercase",
                                    children: t
                                })]
                            }), (0, r.jsx)(o, {
                                className: "-mr-1 ml-2 mt-0.5 h-5 w-5",
                                "aria-hidden": "true"
                            })]
                        })
                    }), (0, r.jsx)(n.u, {
                        as: s.Fragment,
                        enter: "transition ease-out duration-100",
                        enterFrom: "transform opacity-0 scale-95",
                        enterTo: "transform opacity-100 scale-100",
                        leave: "transition ease-in duration-75",
                        leaveFrom: "transform opacity-100 scale-100",
                        leaveTo: "transform opacity-0 scale-95",
                        children: (0, r.jsx)(l.v.Items, {
                            className: "absolute ".concat(m, "-0 z-10 mt-2 w-36 origin-top-").concat(m, " rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"),
                            children: (0, r.jsx)("div", {
                                className: "py-1",
                                children: d.map(e => (0, r.jsx)(l.v.Item, {
                                    children: s => {
                                        let {
                                            active: l,
                                            close: n
                                        } = s;
                                        return (0, r.jsx)("a", {
                                            href: "#",
                                            className: function() {
                                                for (var e = arguments.length, t = Array(e), a = 0; a < e; a++) t[a] = arguments[a];
                                                return t.filter(Boolean).join(" ")
                                            }(l ? "bg-gray-100 text-gray-900" : "text-gray-700", "block px-4 py-2 text-sm"),
                                            onClick: t => {
                                                t.preventDefault(), a(e.language), n()
                                            },
                                            children: (0, r.jsxs)("div", {
                                                className: "flex justify-between gap-1",
                                                children: [(0, r.jsxs)("span", {
                                                    children: [(0, r.jsx)("span", {
                                                        className: "fi fi-".concat(c(e.language), " mr-2")
                                                    }), e.text]
                                                }), t === e.language && (0, r.jsx)(i, {
                                                    className: "h-5 w-5 text-main-color"
                                                })]
                                            })
                                        })
                                    }
                                }, e.language))
                            })
                        })
                    })]
                })
            }
            a(59983)
        },
        18172: function(e, t, a) {
            "use strict";
            a.d(t, {
                Z: function() {
                    return U
                }
            });
            var r = a(85893),
                s = a(67294),
                l = a(16828),
                n = a(13828),
                o = a(70759),
                i = a(85764),
                c = a(13508),
                d = a(21833),
                m = a(36582),
                u = a(86566),
                x = a(56371),
                p = a(69077),
                h = a(24484),
                f = a(44475),
                w = a(12308),
                g = a(55362),
                b = a(57632),
                C = a(48764),
                A = a(14456),
                E = a(71170),
                F = a.n(E);

            function j(e) {
                let {
                    loading: t,
                    progress: a,
                    startLabel: s,
                    endLabel: l
                } = e;
                return (0, r.jsxs)("div", {
                    className: "mt-1",
                    children: [(0, r.jsxs)("div", {
                        className: "relative overflow-hidden rounded-full bg-blue-300",
                        children: [t ? (0, r.jsx)("div", {
                            className: F().loader
                        }) : (0, r.jsx)("div", {
                            className: "h-5 rounded-full bg-white",
                            style: {
                                width: "".concat(a, "%")
                            }
                        }), t ? null : (0, r.jsx)("div", {
                            className: " absolute top-0 left-2/4 w-max -translate-x-2/4 overflow-x-hidden text-center text-sm font-semibold text-blue-700",
                            children: "Until Next Price 0.0055$"
                        })]
                    }), (0, r.jsxs)("div", {
                        className: "mt-2 flex flex-row justify-between text-lg font-bold text-black",
                        children: [(0, r.jsx)("div", {
                            className: "w-max text-left ".concat(t ? "animate-pulse rounded-3xl bg-sky-100 px-2 text-sky-100" : null),
                            children: s
                        }), (0, r.jsx)("div", {
                            className: "w-max text-right ".concat(t ? " animate-pulse rounded-3xl bg-sky-100 px-2 text-sky-100" : null),
                            children: l
                        })]
                    })]
                })
            }
            var N = JSON.parse('{"0XE4B2ED7FFB1AF2C0722F8D80FA2B1BE7DF021504":149060100000,"0X360E3F6D3EFC43882294C4DB3F44E770231322F1":6006240000000,"0XB8ABD4AB88A392A2C72A6C0D11BD7F4513DDC00C":15091134000000,"0X03B2CE1304F7C037EA3B8FDC22779496DE59F2D1":50817279400000,"0X70B1F128E3BA716652792A4BA9059A2F624D3317":2048442000000,"0X15ACEF394B7F4515967AD9150AF227DD0C40A9AB":44243870000000,"0XFB5BA494C40830E24888417575C4D58A8B334AEE":1702495700000,"0XA73017F8158702CB13593F3860C4CF46F511754F":3390525100000,"0XA2CC9BAE23FB33FCB54F870668883DF690CA4C15":10166100000000,"0XB4CE4AE217A63B94EBF7189010D5C95DE29B962D":10169549200000,"0X2121DD0F6E605756BDB152337DC05B81257B2F57":2540195200000,"0X0620823BEA9FA945B1638713474622EE1F3E045F":53924752700000,"0X52967AAB313BECACE567A40B0A7B5CFC58807086":4765934200000,"0XEDA87198375386F546F4C5EAB4C05026D754BABB":25279401400000,"0X4930F11F1C41A950845775DAE11215ECEEF85C81":171678800000,"0X976EA6CB522A952492D314783ED8BAD909978DE0":2555625000000}'),
                B = JSON.parse('{"0X4D33B11815F0B85BBAC3ADEFDDFEA7B05E83B411":6000000800000,"0X7398D69EEF5D8C53C2C8E55C70F8AD3B154234A4":1714834900000,"0X64566E9F45268FE570209EEDD55BE79F631104DF":499349900000,"0X52FC8A0F610AA5FB4C3DE9479E0BE04BD7003D9A":11669777500000,"0X6AC760C807575E66A6F7E5A218649AECEEC8345F":6675400000000,"0X26E6E60733DDB3972DE00E1ACFBE4FFD810E9D6D":3973370500000,"0XF2DBD4F043D3DC2B519EE05CDBFF1C3D42AA2212":82687000000000,"0X85C80C682798DCCF95611298AD02E7A95DBF555B":33157832300000,"0X5C7B3E564501F35254BD526881FF85AAE2807244":15000000000000,"0X6A4B527E9B4B1C97FF4363DA5D5EB1A5E05DFAA0":2000000000000,"0X333B0B078EBE58BAC6919AB01D17C292C5898C2B":1924402000000,"0XAA82D0BBF013389649B20ACD14656BF903957F36":12034865200000,"0X0007538FBF42BC28C657F01929A02192B4DCA882":2723179000000,"0X90FBADF8B14B328523259394547CAE8984AB702A":799019800000,"0X7DB0AE2778181ECCF78D7B3E8F68AFC53B894044":2500654200000,"0XE983AE95A1ACF93DC891015C06CBBBA279B666E8":7546638000000,"0X934E60396B570D9BC9EFEB1F02AB139969EFFE42":32490000000000,"0XE13C8EEF5144845F830648E36F6091F256BE8817":3999873900000,"0XF2EE429DF411C7F79487FFF720BFD29290935244":4586260000000,"0X9BACE276D931E797C9EB6406F5F112A3BDCFC2DB":20103265000000,"0X03CA6315ADDD8947E1D58981C051B52A47004113":3244280000000,"0XD905D50D0511DE5D33229069B4A9CC3D200A5D37":324282000000,"0X70E3FFC8B66F82952F198C44F345DBCEBE546ED2":3278740000000,"0X7D70263EFE73B04EFAA96ABA26DE15F1671F7029":4886490000000,"0X6AF2530B9FF85296F3619DAD3DFB582ADA2890A3":1747947200000,"0X8872C64972248916651035A4B6945DE6DB862859":15041633800000,"0X2626C681D026C94533600E4DD16353C1EB15167B":57839008300000,"0XA8908691D3758301580C2B9D951D7FDEF14882E4":10197274200000,"0X4E276250809C9E9397DA89B1A7B880667ABDD81C":3145326200000,"0X3EF5DD9B16D14EA9324537F9F3CE0ECE13D6A544":2611463500000,"0X2F9360F23386182FBE27340BFC38108099FD5B81":2371635000000,"0XC05E106399E42A85BE160E0D68FC31051B5BF700":10771845700000,"0X049330C68525DF99546BF8039CAE26D636D72FA9":32096400000000,"0X0F389B75D1C04017598C45170508325476E5EEA0":2848540000000,"0X65F15661970A6023C0337781AD0E251FD8BF4D30":5000000000000,"0XEEC4FA3665119DB977E3B27B847FF136FBB9B15B":433458800000,"0X6F237A57444FB6A35D15439C7D35CFB5BB85CCFB":7954813600000,"0XB4108236CD917ECAE98B987C30CA1444052B3648":15857488600000,"0XADCF1B2DBC0CBC4B2877724BA112143092BFD8B1":1625797400000,"0XF711B426A72D6C1929338A9A2DC77F9DCAC0565A":17086359700000,"0XF9BA2A4F9E14E317D0ECC4FAEA2662F134FE212A":156821850000000,"0XA677F86D8D140E6440B73CF4101C5C9FE02744D0":21364759800000,"0XA2A5A7ACE80104447057634D7C3DBA7595C058E6":3556180000000,"0X0AC7788D692603FF3430765C7FFFD1396B82B442":5051859700000,"0X015F4C96D57B3666C8FFF4D8796E1C9AD3581458":6100756000000,"0X0DD937BBD5C43282EF06A34AB20242EC9B878EC6":181518000000,"0X2FF3EFA0CC6A647FA2434AE5AE4D5BAD3952BD75":1000740200000,"0XD8BE9028077858B9DAEF8894C16EB17B6B2A54DB":2707690700000,"0XFA3617AC7319F86063E40904183EC537E180F51E":1000681600000,"0X44A4140890CF3315634E7D776754545CDEB2D953":3428796800000,"0X04A0D2D866BC695F08B962546571E666BCB21617":2000086100000,"0X1ECC39D84FFE8A22E1934B2A7E5156F6EF1860C4":1000002800000,"0X8F4E41D6E0CF1464A3A8C106E20FCB0C75DE20BB":10000057400000,"0X21F0FC3D3781E3C0EBCECA66C86B0BE5749E84FC":2499985900000,"0XCC0DD392244BC069A9B7EAFBC7CC0997DC9B476F":199831300000,"0XBAA17296BDEB86565ED5CFBE0410C77910F80D3A":115000711300000,"0XE9537E95D647D95850A249CF10D3045A89FBAAA6":2000046900000,"0X05DD9C6743E41F24B52E592AA11585CBCFE266DD":999999300000,"0X7CED6C96A57B5AD45552F6E98D4007C5EEB960C1":4999954700000,"0XA724743FB1C837C33A745BBD185CFCB1E1FCFD82":4999942000000,"0XA810E490082B0AFBB8AC4D7DB8D341F6A3AE8E97":10006679900000,"0X0A44106AD890C23A9B3084A9F28309273A273308":99999898300000,"0XB0136C6878C9E2FD0951B87E9291A04DA0E332C7":14999998500000,"0XEA0B56FE8909904C16046B7A1FA718091322AD44":5027531300000,"0X7DD5E787DF09D37CD39BC442E7F934B63C049559":9999932400000}');
            let D = [{
                name: "ETH",
                icon: (0, r.jsx)("img", {
                    className: "-ml-0.5 mr-2 h-5 w-5",
                    src: "/crypto/eth.svg",
                    "aria-hidden": "true",
                    alt: "eth"
                }),
                currency: "ETH"
            }, {
                name: "USDT",
                icon: (0, r.jsx)("img", {
                    className: "-ml-0.5 mr-2 h-5 w-5",
                    src: "/crypto/usdt.svg",
                    "aria-hidden": "true",
                    alt: "usdt"
                }),
                currency: "USDT"
            }, {
                name: "CARD",
                icon: (0, r.jsx)(n, {
                    className: "-ml-0.5 mr-2 h-5 w-5",
                    "aria-hidden": "true",
                    strokeWidth: 1
                }),
                currency: "USD"
            }];

            function v() {
                for (var e = arguments.length, t = Array(e), a = 0; a < e; a++) t[a] = arguments[a];
                return t.filter(Boolean).join(" ")
            }
            let y = C.Buffer.alloc(16),
                k = "0xdAC17F958D2ee523a2206206994597C13D831ec7",
                S = "0xe881B75B129083A0c0D621896D704A074be6C7E0",
                _ = 1,
                T = (0, p.eI)((0, A.tE)({
                    appName: "EcoTerra",
                    alchemyId: "nrEdt0jfT3UCvPJWzKe7scpJUqVjbUDp",
                    chains: [h.RJ]
                })),
                X = new Date(2023, 3, 27, 16, 35, 0, 0),
                R = 0,
                M = "undefined";

            function U(e) {
                let {
                    langFile: t,
                    howToBuy: a = !1,
                    clickId: n,
                    source: h
                } = e, C = (0, p.yL)(), {
                    address: E
                } = (0, p.mA)(), [F, U] = (0, s.useState)({
                    text: "",
                    error: !1
                }), [I, O] = (0, s.useState)(!1), [z, W] = (0, s.useState)(D[0]), [L, P] = (0, s.useState)(!1), [H, J] = (0, s.useState)(0), [Z, V] = (0, s.useState)(0), [Y, q] = (0, s.useState)(!1), [$, G] = (0, s.useState)(864e3), [K, Q] = (0, s.useState)(!1), [ee, et] = (0, s.useState)(""), [ea, er] = (0, s.useState)(!1), [es, el] = (0, s.useState)({
                    index: 0,
                    usdt_round_cap: 0,
                    usdt_round_raised: 1e5,
                    usdt_to_token_rate: 210
                }), [en, eo] = (0, s.useState)({
                    usdt: -1,
                    ecoterra: -1
                }), [ei, ec] = (0, s.useState)(!0), [ed, em] = (0, s.useState)(!1), [eu, ex] = (0, s.useState)(!1), [ep, eh] = (0, s.useState)({
                    address: "",
                    commodity: "ETH",
                    commodity_amount: 0,
                    pk_id: "key2",
                    sc_address: S,
                    sc_id: "",
                    sc_input_data: "",
                    signature: ""
                });
                (0, s.useEffect)(() => {
                    let e = () => {
                        G(Math.floor((X.getTime() - Date.now()) / 1e3))
                    };
                    e();
                    let t = setInterval(e, 1e3);
                    return () => clearInterval(t)
                }, []), (0, s.useEffect)(() => {
                    fetch("https://www.cloudflare.com/cdn-cgi/trace").then(e => e.text()).then(e => {
                        let t = e.trim().split("\n").reduce((e, t) => {
                            let a = t.split("=");
                            return e[a[0]] = a[1], e
                        }, {});
                        M = t.ip
                    }), eg(), ef();
                    let e = setInterval(ef, 12e4);
                    return () => clearInterval(e)
                }, []), (0, s.useEffect)(() => {
                    eb("in", H)
                }, [z]), (0, s.useEffect)(() => {
                    if (O(void 0 !== E), void 0 !== E) {
                        var e;
                        ew(), null == window || null === (e = window.dataLayer) || void 0 === e || e.push({
                            event: "workflowStep",
                            workflowName: "connectWallet",
                            workflowStepNumber: 2,
                            workflowStepName: "successful",
                            workflowCompleteFlag: 1,
                            walletAddress: E
                        }), fetch("https://api.dashfx.net/api/postback/presale", {
                            method: "POST",
                            headers: {
                                "Content-Type": "application/json",
                                Authorization: "Bearer ab0330f179de5d1570514d899cd0f7fd"
                            },
                            body: JSON.stringify({
                                walletAddress: E,
                                clickId: n || null,
                                source: h || null,
                                ipAddress: M,
                                iid: 825,
                                event: "lead_success"
                            })
                        })
                    }
                }, [E]);
                let ef = async () => {
                        let e = await C.call({
                                to: S,
                                data: "0x489e185c"
                            }),
                            t = {
                                index: 1,
                                usdt_round_cap: parseInt(e.substring(194), 16) / 1e6,
                                usdt_round_raised: Math.floor(100 * (parseInt(e.substring(130, 194), 16) / 1e6)) / 100 + 12148,
                                usdt_to_token_rate: parseInt(e.substring(66, 130), 16)
                            };
                        el(t)
                    },
                    ew = async () => {
                        let e = E.substring(2).padStart(64, "0"),
                            t = await C.call({
                                to: S,
                                data: "0xc34e9383" + e
                            }),
                            a = Math.floor(100 * (parseInt(t.substring(2, 66), 16) / 1e9)) / 100;
                        if (parseInt(t.substring(66, 130), 16), E.toUpperCase() in N) {
                            let r = N[E.toUpperCase()];
                            a += Math.floor(100 * r / 1e9) / 100 * 2.5
                        }
                        if (E.toUpperCase() in B) {
                            let s = B[E.toUpperCase()];
                            a += Math.floor(100 * s / 1e9) / 100 * 1.5
                        }
                        console.log(a), console.log(es.usdt_to_token_rate), eo({
                            ecoterra: Math.floor(100 * a) / 100,
                            usdt: Math.floor(a / es.usdt_to_token_rate * 100) / 100
                        }), C.call({
                            to: k,
                            data: "0xdd62ed3e" + E.substring(2).padStart(64, "0") + S.substring(2).padStart(64, "0")
                        }).then(e => {
                            R = Math.floor(100 * (parseInt(e.substring(2, 66), 16) / 1e6)) / 100
                        })
                    },
                    eg = async () => {
                        let e = await C.call({
                            to: "0x5f4eC3Df9cbd43714FE2740f5E3616155c5b8419",
                            data: "0x50d25bcd"
                        });
                        isNaN(_ = parseFloat((parseInt(e, 16) / 1e8).toFixed(2))) && (_ = 1400)
                    },
                    eb = (e, t) => {
                        "ETH" === z.name ? "in" === e ? V(Math.round(1e5 * (t * es.usdt_to_token_rate * _)) / 1e5) : J(Math.round(1e5 * (t / (es.usdt_to_token_rate * _))) / 1e5) : "in" === e ? V(Math.round(1e5 * (t * es.usdt_to_token_rate)) / 1e5) : J(Math.round(1e5 * (t / es.usdt_to_token_rate)) / 1e5)
                    },
                    eC = async () => {
                        if ("" === Z || "" === H) return;
                        if (Z < 2100) {
                            U({
                                text: "The amount of tokens must be at least ".concat(2100, "!"),
                                error: !0
                            });
                            return
                        }
                        let e = 0 !== en.ecoterra ? "revenue" : "conversion",
                            t = "ETH" === z.name ? H * _ : H;
                        if (t + es.usdt_round_raised > es.usdt_round_cap) {
                            U({
                                text: "The amount of tokens is too high for this round. Max amount set automatically.",
                                error: !0
                            });
                            let a = "ETH" === z.name ? (es.usdt_round_cap - es.usdt_round_raised) / _ : es.usdt_round_cap - es.usdt_round_raised;
                            console.log(a), J(a = Math.floor(1e5 * a) / 1e5), eb("in", a);
                            return
                        }
                        P(!0), U({
                            text: "",
                            error: !1
                        }), window.dataLayer.push({
                            event: "workflowStep",
                            workflowName: "swap",
                            workflowStepNumber: 1,
                            workflowStepName: "swapAmount",
                            workflowCompleteFlag: 0,
                            walletAddress: E
                        });
                        try {
                            if ("ETH" === z.name) {
                                et("Click 'Confirm' in Metamask"), Q(!0);
                                let r = await (0, f.T7)({
                                    mode: "recklesslyUnprepared",
                                    request: {
                                        to: S,
                                        data: "0x6fb3acfa",
                                        value: (0, x.parseUnits)(H.toString())
                                    }
                                });
                                et("Wait for the transaction to be approved"), window.dataLayer.push({
                                    event: "workflowStep",
                                    workflowName: "swap",
                                    workflowStepNumber: 2,
                                    workflowStepName: "confirmTransaction",
                                    workflowCompleteFlag: 0,
                                    walletAddress: E
                                }), await (0, f.Mn)({
                                    hash: r.hash
                                }), eF("Your transaction has been successfully confirmed", 5e3), window.dataLayer.push({
                                    event: "workflowStep",
                                    workflowName: "swap",
                                    workflowStepNumber: 3,
                                    workflowStepName: "swapSuccessful",
                                    workflowCompleteFlag: 1,
                                    walletAddress: E,
                                    transactionId: r.hash,
                                    swapFromCurrency: "ETH",
                                    swapFromValue: H,
                                    swapToCurrency: "ECOTERRA",
                                    swapToValue: Z
                                }), ef(), ew(), U({
                                    text: "Your transaction has beed successfully confirmed!",
                                    error: !1
                                }), await fetch("https://api.dashfx.net/api/postback/presale", {
                                    method: "POST",
                                    headers: {
                                        "Content-Type": "application/json",
                                        Authorization: "Bearer ab0330f179de5d1570514d899cd0f7fd"
                                    },
                                    body: JSON.stringify({
                                        walletAddress: E,
                                        purchaseTokens: Z,
                                        purchaseType: "ETH",
                                        purchaseTypeAmount: H,
                                        purchaseUsdAmount: t,
                                        clickId: n || null,
                                        source: h || null,
                                        ipAddress: M,
                                        iid: 825,
                                        event: e
                                    })
                                })
                            } else if ("USDT" === z.name) {
                                let s = (1e6 * t).toString(16).padStart(64, "0"),
                                    l = S.substring(2).padStart(64, "0");
                                if (0 === R) {
                                    et("Click on 'Use default' and then click 'Next' and 'Approve'"), Q(!0);
                                    let o = await (0, f.T7)({
                                        mode: "recklesslyUnprepared",
                                        request: {
                                            to: k,
                                            data: "0x095ea7b3" + l + s
                                        }
                                    });
                                    et("Wait for the transaction to be approved"), await (0, f.Mn)({
                                        hash: o.hash
                                    })
                                } else if (R !== H) {
                                    er(!0), P(!1);
                                    return
                                }
                                et("Click 'Confirm' in Metamask"), Q(!0);
                                let i = await (0, f.T7)({
                                    mode: "recklesslyUnprepared",
                                    request: {
                                        to: S,
                                        data: "0x843b95b7" + s
                                    }
                                });
                                et("Wait for the transaction to be approved"), window.dataLayer.push({
                                    event: "workflowStep",
                                    workflowName: "swap",
                                    workflowStepNumber: 2,
                                    workflowStepName: "confirmTransaction",
                                    workflowCompleteFlag: 0,
                                    walletAddress: E
                                }), await (0, f.Mn)({
                                    hash: i.hash
                                }), eF("Your transaction has been successfully confirmed", 5e3), window.dataLayer.push({
                                    event: "workflowStep",
                                    workflowName: "swap",
                                    workflowStepNumber: 3,
                                    workflowStepName: "swapSuccessful",
                                    workflowCompleteFlag: 1,
                                    walletAddress: E,
                                    transactionId: i.hash,
                                    swapFromCurrency: "USDT",
                                    swapFromValue: H,
                                    swapToCurrency: "ECOTERRA",
                                    swapToValue: Z
                                }), ef(), ew(), U({
                                    text: "Your transaction has been successfully confirmed!",
                                    error: !1
                                }), await fetch("https://api.dashfx.net/api/postback/presale", {
                                    method: "POST",
                                    headers: {
                                        "Content-Type": "application/json",
                                        Authorization: "Bearer ab0330f179de5d1570514d899cd0f7fd"
                                    },
                                    body: JSON.stringify({
                                        walletAddress: E,
                                        purchaseTokens: Z,
                                        purchaseType: "USDT",
                                        purchaseTypeAmount: H,
                                        purchaseUsdAmount: H,
                                        clickId: n || null,
                                        source: h || null,
                                        ipAddress: M,
                                        iid: 825,
                                        event: e
                                    })
                                })
                            } else if ("CARD" === z.name) {
                                let c = H / _,
                                    d = null == E ? void 0 : E.substring(2).padStart(64, "0"),
                                    m = {
                                        address: E || "",
                                        commodity: "ETH",
                                        commodity_amount: c.toPrecision(5),
                                        pk_id: "key2",
                                        sc_address: S,
                                        sc_id: (0, b.Z)({}, y).toString("hex"),
                                        sc_input_data: "0xa1e1d21f" + d
                                    },
                                    u = (0, g.signSmartContractData)(m, "0x98a86c43869046807d6dbc2a205ad0a9a41be39f593cbdaf2252f5d21691ff63");
                                eh(u), em(!0)
                            }
                        } catch (p) {
                            console.log(p), 4001 === p.code ? (window.dataLayer.push({
                                event: "workflowStep",
                                workflowName: "swap",
                                workflowStepNumber: 2,
                                workflowStepName: "confirmTransaction",
                                workflowCompleteFlag: 0,
                                workflowErrorCode: "User rejected transaction",
                                walletAddress: E
                            }), U({
                                text: "You have rejected the transaction!",
                                error: !0
                            })) : -32e3 === p.error.code && (window.dataLayer.push({
                                event: "workflowStep",
                                workflowName: "swap",
                                workflowStepNumber: 1,
                                workflowStepName: "swapAmount",
                                workflowCompleteFlag: 0,
                                workflowErrorCode: "Insufficient funds",
                                walletAddress: E
                            }), U({
                                text: "Your wallet has insufficient funds!",
                                error: !0
                            }))
                        }
                        Q(!1), P(!1)
                    },
                    eA = async () => {
                        q(!0), await new Promise(e => setTimeout(e, 5e3)), q(!1)
                    },
                    eE = async () => {
                        let e = await (await fetch("https://api.dashfx.net/api/publisher/presale", {
                            method: "POST",
                            headers: {
                                "Content-Type": "application/json",
                                Authorization: "Bearer ab0330f179de5d1570514d899cd0f7fd"
                            },
                            body: JSON.stringify({
                                walletAddress: E,
                                iid: 825
                            })
                        })).json();
                        await navigator.clipboard.writeText(e.data.url), eF("Your referral link has been successfully copied to the clipboard.")
                    },
                    eF = async function(e) {
                        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1e3;
                        et(e), Q(!0), new Promise(() => setTimeout(() => Q(!1), t))
                    };
                return (0, r.jsx)(p.eM, {
                    client: T,
                    children: (0, r.jsx)(A.bO, {
                        children: (0, r.jsx)("section", {
                            id: "presale",
                            className: "scroll-mt-28 lg:scroll-mt-0",
                            children: (0, r.jsxs)("div", {
                                className: "relative mb-24 flex flex-col rounded-3xl bg-white p-8 shadow-xl",
                                children: [ed ? (0, r.jsxs)("div", {
                                    className: "absolute left-0 top-0 z-10 h-full w-full overflow-hidden rounded-3xl bg-white",
                                    children: [(0, r.jsx)("div", {
                                        id: "WertModule",
                                        className: "h-full w-full rounded-3xl",
                                        children: (0, r.jsx)(w.Z, {
                                            options: { ...ep,
                                                partner_id: "01GSSXMGR0V3BZG8TJ3TRWTBFS",
                                                container_id: "WertModule",
                                                commodity: "ETH:ethereum",
                                                listeners: {
                                                    loaded: () => ex(!0),
                                                    "payment-status": e => {
                                                        "cancelled" === e.status && window.dataLayer.push({
                                                            event: "workflowStep",
                                                            workflowName: "swap",
                                                            workflowStepNumber: 2,
                                                            workflowStepName: "confirmTransaction",
                                                            workflowCompleteFlag: 0,
                                                            workflowErrorCode: "User rejected transaction",
                                                            walletAddress: E
                                                        }), "pending" === e.status && window.dataLayer.push({
                                                            event: "workflowStep",
                                                            workflowName: "swap",
                                                            workflowStepNumber: 2,
                                                            workflowStepName: "confirmTransaction",
                                                            workflowCompleteFlag: 0,
                                                            walletAddress: E
                                                        }), "success" === e.status && (window.dataLayer.push({
                                                            event: "workflowStep",
                                                            workflowName: "swap",
                                                            workflowStepNumber: 3,
                                                            workflowStepName: "swapSuccessful",
                                                            workflowCompleteFlag: 1,
                                                            walletAddress: E,
                                                            transactionId: e.tx_id,
                                                            swapFromCurrency: "USD",
                                                            swapFromValue: H,
                                                            swapToCurrency: "ECOTERRA",
                                                            swapToValue: Z
                                                        }), fetch("https://api.dashfx.net/api/postback/presale", {
                                                            method: "POST",
                                                            headers: {
                                                                "Content-Type": "application/json",
                                                                Authorization: "Bearer ab0330f179de5d1570514d899cd0f7fd"
                                                            },
                                                            body: JSON.stringify({
                                                                walletAddress: E,
                                                                purchaseTokens: Z,
                                                                purchaseType: "USDT",
                                                                purchaseTypeAmount: H,
                                                                purchaseUsdAmount: H,
                                                                clickId: n || null,
                                                                source: h || null,
                                                                ipAddress: M,
                                                                iid: 825,
                                                                event: 0 !== en.ecoterra ? "revenue" : "conversion"
                                                            })
                                                        })), "failed" === e.status && window.dataLayer.push({
                                                            event: "workflowStep",
                                                            workflowName: "swap",
                                                            workflowStepNumber: 1,
                                                            workflowStepName: "swapAmount",
                                                            workflowCompleteFlag: 0,
                                                            workflowErrorCode: "Transaction Failed",
                                                            walletAddress: E
                                                        })
                                                    }
                                                }
                                            }
                                        })
                                    }), eu ? (0, r.jsx)("button", {
                                        onClick: () => {
                                            em(!1), ex(!1)
                                        },
                                        className: "text-md relative bottom-10 z-20 inline-flex w-full place-items-center items-center justify-center rounded-md bg-white px-4 py-2 font-medium text-slate-900 underline",
                                        children: "Cancel transaction"
                                    }) : null]
                                }) : null, (0, r.jsxs)("div", {
                                    className: "w-100 relative -top-8 left-0 -mx-8 -mb-4 flex h-full flex-col items-center gap-y-3 rounded-tl-3xl rounded-tr-3xl bg-blue-600 py-2 text-center",
                                    children: [(0, r.jsxs)("div", {
                                        className: "flex min-w-[70%] flex-row justify-between px-3 text-xl font-semibold tracking-tight text-white  ".concat(0 === es.index ? "animate-pulse rounded-2xl bg-blue-500 text-blue-500" : null, " flex-shrink-0"),
                                        children: [(0, r.jsxs)("div", {
                                            className: "flex min-w-[60px] flex-col items-center",
                                            children: [(0, r.jsx)("div", {
                                                className: " text-3xl font-black",
                                                children: "".concat(Math.floor($ / 86400).toString().padStart(2, "0"))
                                            }), (0, r.jsx)("div", {
                                                className: "text-xs font-normal tracking-wide ".concat(0 !== es.index ? "text-blue-300" : " "),
                                                children: "DAYS"
                                            })]
                                        }), (0, r.jsx)("span", {
                                            className: "relative top-[0.1rem] h-max",
                                            children: ":"
                                        }), (0, r.jsxs)("div", {
                                            className: "flex min-w-[60px] flex-col items-center",
                                            children: [(0, r.jsx)("div", {
                                                className: " text-3xl font-black",
                                                children: "".concat(Math.floor($ % 86400 / 3600).toString().padStart(2, "0"))
                                            }), (0, r.jsx)("div", {
                                                className: "text-xs font-normal tracking-wide ".concat(0 !== es.index ? "text-blue-300" : " "),
                                                children: "HOURS"
                                            })]
                                        }), (0, r.jsx)("span", {
                                            className: "relative top-[0.1rem] h-max",
                                            children: ":"
                                        }), (0, r.jsxs)("div", {
                                            className: "flex min-w-[60px] flex-col items-center",
                                            children: [(0, r.jsx)("div", {
                                                className: " text-3xl font-black",
                                                children: "".concat(Math.floor($ % 86400 % 3600 / 60).toString().padStart(2, "0"))
                                            }), (0, r.jsx)("div", {
                                                className: "text-xs font-normal tracking-wide ".concat(0 !== es.index ? "text-blue-300" : " "),
                                                children: "MINUTES"
                                            })]
                                        }), (0, r.jsx)("span", {
                                            className: "relative top-[0.1rem] h-max",
                                            children: ":"
                                        }), (0, r.jsxs)("div", {
                                            className: "flex min-w-[60px] flex-col items-center",
                                            children: [(0, r.jsx)("div", {
                                                className: " text-3xl font-black",
                                                children: "".concat(Math.floor($ % 86400 % 3600 % 60).toString().padStart(2, "0"))
                                            }), (0, r.jsx)("div", {
                                                className: "text-xs font-normal tracking-wide ".concat(0 !== es.index ? "text-blue-300" : " "),
                                                children: "SECONDS"
                                            })]
                                        })]
                                    }), (0, r.jsx)("div", {
                                        className: "-mt-2 w-5/6",
                                        children: (0, r.jsx)(j, {
                                            loading: 0 === es.index,
                                            progress: 100 - $ / 864e3 * 100
                                        })
                                    }), (0, r.jsx)("div", {
                                        className: "-mt-3 flex w-max flex-row justify-center gap-2 text-lg font-semibold tracking-tighter text-white ".concat(0 === es.index ? "animate-pulse rounded-2xl bg-blue-500 px-10 text-blue-500" : null),
                                        children: "USDT raised: \n                  ".concat(new Intl.NumberFormat("en-EN", {
                                            style: "currency",
                                            currency: "USD"
                                        }).format(es.usdt_round_raised).split(".")[0], "\n                / $1,275,000")
                                    }), (0, r.jsx)("div", {
                                        className: "m-auto -mt-1 w-max text-sm font-normal tracking-[1px] ".concat(0 === es.index ? "animate-pulse rounded-2xl bg-blue-500 px-10 text-blue-500" : "text-blue-300"),
                                        children: "LISTING PRICE: $0.01"
                                    })]
                                }), F.text && (0, r.jsxs)("div", {
                                    className: "text-md flex w-full items-center justify-center text-center font-semibold ".concat(F.error ? "text-red-600" : "text-emerald-600"),
                                    children: [F.error ? (0, r.jsx)(o, {
                                        className: "mr-1 h-5 w-5",
                                        strokeWidth: 2
                                    }) : (0, r.jsx)(i, {
                                        className: "mr-1 h-5 w-5",
                                        strokeWidth: 2
                                    }), F.text]
                                }), I && en.usdt > 0 ? (0, r.jsxs)("div", {
                                    className: "text-md mb-2 cursor-pointer ".concat(F.text ? "mt-3" : "", " flex flex-col items-center rounded-2xl border-2 border-blue-600 p-3 py-3 text-blue-600"),
                                    onClick: () => {
                                        ec(e => !e), eA()
                                    },
                                    children: [(0, r.jsxs)("div", {
                                        className: "mb-3 flex items-center justify-center",
                                        children: [(0, r.jsx)(c, {
                                            className: v("mr-1 h-4 w-4 ", Y ? "animate-spin" : ""),
                                            strokeWidth: 2
                                        }), (0, r.jsx)("p", {
                                            className: "text-sm font-semibold tracking-widest",
                                            children: t ? t.presale.wallet_ballance : "My Wallet Ballance"
                                        })]
                                    }), (0, r.jsxs)("p", {
                                        className: "px-2 text-3xl font-bold tracking-tight ".concat(-1 === en.usdt ? "animate-pulse rounded-3xl bg-sky-100 text-sky-100" : null),
                                        children: [ei ? en.ecoterra : en.usdt, " ", (0, r.jsx)("span", {
                                            className: " text-xs tracking-widest",
                                            children: ei ? "ECOTERRA" : "USDT"
                                        })]
                                    })]
                                }) : null, (0, r.jsxs)("div", {
                                    className: "relative mt-1",
                                    children: [(0, r.jsx)("div", {
                                        className: "absolute inset-0 flex items-center",
                                        "aria-hidden": "true",
                                        children: (0, r.jsx)("div", {
                                            className: "w-full border-t border-blue-600"
                                        })
                                    }), (0, r.jsx)("div", {
                                        className: "relative flex justify-center",
                                        children: 0 === es.index ? (0, r.jsxs)("div", {
                                            className: "flex flex-row gap-x-2 bg-white px-4 py-[6px]",
                                            children: [(0, r.jsx)("div", {
                                                className: " h-2 w-2 animate-bounce rounded-full bg-blue-600"
                                            }), (0, r.jsx)("div", {
                                                className: " h-2 w-2 animate-[bounce_1s_infinite_0.5s] rounded-full bg-blue-600"
                                            }), (0, r.jsx)("div", {
                                                className: " h-2 w-2 animate-bounce rounded-full bg-blue-600"
                                            }), (0, r.jsx)("div", {
                                                className: " h-2 w-2 animate-[bounce_1s_infinite_0.5s] rounded-full bg-blue-600"
                                            }), (0, r.jsx)("div", {
                                                className: " h-2 w-2 animate-bounce rounded-full bg-blue-600"
                                            })]
                                        }) : (0, r.jsx)("span", {
                                            className: "bg-white px-2 text-sm font-bold text-blue-600",
                                            children: "1 ECOTERRA = $0.00475"
                                        })
                                    })]
                                }), (0, r.jsxs)("div", {
                                    className: "mt-2",
                                    children: [(0, r.jsx)(l.E, {
                                        value: z,
                                        onChange: W,
                                        className: "mt-2",
                                        children: (0, r.jsx)("div", {
                                            id: "currency-button-container",
                                            className: "mx-auto grid grid-cols-1 gap-3 gap-x-6 sm:grid-cols-3 sm:grid-rows-1 lg:gap-x-2 xl:gap-x-6",
                                            children: D.map(e => (0, r.jsx)(l.E.Option, {
                                                value: e,
                                                className: e => {
                                                    let {
                                                        active: t,
                                                        checked: a
                                                    } = e;
                                                    return v("cursor-pointer border-2 focus:outline-none", a ? "border-transparent border-emerald-500 text-emerald-600" : "border-gray-400 bg-white font-semibold text-gray-700 shadow-sm hover:bg-gray-50", "place-items-center rounded-md border  text-sm font-medium uppercase sm:flex-1")
                                                },
                                                children: (0, r.jsx)(l.E.Label, {
                                                    children: (0, r.jsxs)("div", {
                                                        className: "flex cursor-pointer place-items-center items-center justify-center py-2.5 px-3",
                                                        children: [(0, r.jsx)("div", {
                                                            className: "shrink-0 text-gray-700",
                                                            children: e.icon
                                                        }), (0, r.jsx)("div", {
                                                            children: e.name
                                                        })]
                                                    })
                                                })
                                            }, e.name))
                                        })
                                    }), (0, r.jsxs)("div", {
                                        className: "mt-5",
                                        children: [(0, r.jsx)("label", {
                                            htmlFor: "account-number",
                                            className: "block text-sm font-medium text-gray-500",
                                            children: t ? (0, r.jsxs)(r.Fragment, {
                                                children: [t.presale.crypto_amount.split("x")[0], (0, r.jsx)("span", {
                                                    className: "font-bold",
                                                    children: z.currency
                                                }), t.presale.crypto_amount.split("x")[1]]
                                            }) : (0, r.jsxs)(r.Fragment, {
                                                children: ["Amount in", " ", (0, r.jsx)("span", {
                                                    className: "font-bold",
                                                    children: z.currency
                                                }), " you pay"]
                                            })
                                        }), (0, r.jsxs)("div", {
                                            className: "relative mt-1 rounded-md shadow-sm",
                                            children: [(0, r.jsx)("input", {
                                                type: "number",
                                                name: "account-number",
                                                id: "account-number",
                                                className: "block h-12 w-full rounded-md border-gray-300 pr-12 focus:border-emerald-500 focus:ring-emerald-500 sm:text-sm",
                                                autoComplete: "off",
                                                value: H,
                                                onChange: e => {
                                                    if ("" === e.target.value || e.target.valueAsNumber < 0) {
                                                        V(""), J("");
                                                        return
                                                    }
                                                    J(e.target.valueAsNumber), eb("in", e.target.valueAsNumber)
                                                }
                                            }), (0, r.jsx)("div", {
                                                className: "pointer-events-none absolute inset-y-[1px] right-[1px] flex w-16 items-center justify-center rounded-tr-md rounded-br-md border-l border-gray-300 bg-gray-100",
                                                children: (0, r.jsx)("div", {
                                                    className: "pl-2",
                                                    children: z.icon
                                                })
                                            })]
                                        })]
                                    }), (0, r.jsxs)("div", {
                                        className: "mt-4",
                                        children: [(0, r.jsx)("label", {
                                            htmlFor: "account-number",
                                            className: "block text-sm font-medium text-gray-500",
                                            children: t ? (0, r.jsxs)(r.Fragment, {
                                                children: [t.presale.ecoterra_amount.split("ECOTERRA")[0], (0, r.jsx)("span", {
                                                    className: "font-bold",
                                                    children: "ECOTERRA"
                                                }), t.presale.ecoterra_amount.split("ECOTERRA")[1]]
                                            }) : (0, r.jsxs)(r.Fragment, {
                                                children: ["Amount in ", (0, r.jsx)("span", {
                                                    className: "font-bold",
                                                    children: "ECOTERRA"
                                                }), " you receive"]
                                            })
                                        }), (0, r.jsxs)("div", {
                                            className: "relative mt-1 rounded-md shadow-sm",
                                            children: [(0, r.jsx)("input", {
                                                type: "number",
                                                name: "account-number",
                                                id: "account-number",
                                                className: "block h-12 w-full rounded-md border-gray-300 pr-12 focus:border-emerald-500 focus:ring-emerald-500 sm:text-sm",
                                                autoComplete: "off",
                                                value: Z,
                                                onChange: e => {
                                                    if ("" === e.target.value || e.target.valueAsNumber < 0) {
                                                        V(""), J("");
                                                        return
                                                    }
                                                    V(e.target.valueAsNumber), eb("out", e.target.valueAsNumber)
                                                }
                                            }), (0, r.jsx)("div", {
                                                className: "pointer-events-none absolute inset-y-[1px] right-[1px] flex w-16 items-center justify-center rounded-tr-md rounded-br-md border-l border-gray-300 bg-gray-100",
                                                children: (0, r.jsx)("img", {
                                                    className: "h-5 w-5",
                                                    src: "/crypto/ecoterra.svg",
                                                    "aria-hidden": "true",
                                                    alt: "usdt"
                                                })
                                            })]
                                        })]
                                    }), (0, r.jsx)("div", {
                                        className: "mt-5",
                                        children: (0, r.jsx)(A.x3.Custom, {
                                            children: e => {
                                                let {
                                                    isConnected: a,
                                                    show: s,
                                                    address: l
                                                } = e;
                                                return (0, r.jsxs)(r.Fragment, {
                                                    children: [a ? (0, r.jsx)("button", {
                                                        id: "buyButton",
                                                        type: "button",
                                                        className: "text-md mb-5 inline-flex h-[60px] w-full place-items-center items-center justify-center rounded-md border border-transparent bg-blue-600 px-4 py-2 font-bold tracking-widest text-white shadow-sm hover:bg-blue-700",
                                                        onClick: eC,
                                                        children: L ? (0, r.jsx)("div", {
                                                            className: "inline-block h-4 w-4 animate-spin rounded-full border-[2px] border-current border-t-transparent text-gray-100/50",
                                                            role: "status",
                                                            "aria-label": "loading",
                                                            children: (0, r.jsx)("span", {
                                                                className: "sr-only",
                                                                children: "Loading..."
                                                            })
                                                        }) : t ? t.presale.buy_button : "Buy Tokens"
                                                    }, "buy") : null, (0, r.jsx)("button", {
                                                        id: "loginButton",
                                                        onClick: () => {
                                                            null == s || s(), a || window.dataLayer.push({
                                                                event: "workflowStep",
                                                                workflowName: "connectWallet",
                                                                workflowStepNumber: 1,
                                                                workflowStepName: "start",
                                                                workflowCompleteFlag: 0
                                                            })
                                                        },
                                                        className: a ? "text-md inline-flex h-[60px] w-full place-items-center items-center justify-center rounded-md border border-gray-300 bg-white px-3 py-2 font-medium leading-4 text-gray-700 shadow-sm hover:bg-gray-50" : "text-md inline-flex h-[60px] w-full place-items-center items-center justify-center rounded-md border border-transparent bg-blue-600 px-4 py-2 font-bold tracking-wide text-white shadow-sm hover:bg-blue-700",
                                                        children: a ? (0, r.jsxs)(r.Fragment, {
                                                            children: [(null == l ? void 0 : l.substring(0, 5)) + "..." + (null == l ? void 0 : l.substring(l.length - 4, l.length)), (0, r.jsx)(d, {
                                                                className: "ml-2 h-5 w-5",
                                                                "aria-hidden": "true",
                                                                strokeWidth: 2
                                                            })]
                                                        }) : t ? t.presale.connect_button : "Connect Wallet"
                                                    }, "login")]
                                                })
                                            }
                                        })
                                    }), a || I ? (0, r.jsxs)("div", {
                                        className: "mt-6 grid place-items-center gap-4 ".concat(I && a ? "grid-cols-2" : "grid-cols-1"),
                                        children: [a && (0, r.jsxs)("a", {
                                            href: "/how-to-buy/".concat(t ? t.lang : "en"),
                                            className: "text-md flex items-center font-semibold text-gray-500/80 hover:text-blue-600",
                                            children: [(0, r.jsx)(m, {
                                                className: "-ml-0.5 mr-1 h-5 w-5",
                                                "aria-hidden": "true",
                                                strokeWidth: 2
                                            }), "How to buy"]
                                        }), I ? (0, r.jsxs)("div", {
                                            className: "text-md flex cursor-pointer items-center font-semibold text-teal-600 hover:text-blue-600",
                                            onClick: () => eE(),
                                            children: [(0, r.jsx)(u, {
                                                className: "-ml-0.5 mr-1 h-5 w-5",
                                                "aria-hidden": "true",
                                                strokeWidth: 2
                                            }), "5% Referral Link"]
                                        }) : null]
                                    }) : null]
                                }), (0, r.jsxs)("div", {
                                    id: "alert",
                                    className: "text-md fixed right-0 bottom-0 z-40 flex flex-row items-center rounded-2xl bg-green-200 p-4 font-medium tracking-tighter text-teal-900 transition-all",
                                    style: {
                                        transform: K ? "translate(-2%, -10%)" : "translate(0%, 100%)"
                                    },
                                    children: [(0, r.jsx)(i, {
                                        className: "-ml-0.5 mr-1 h-6 w-6",
                                        "aria-hidden": "true",
                                        strokeWidth: 2
                                    }), ee]
                                }), (0, r.jsxs)("div", {
                                    id: "alert_allowance",
                                    className: "fixed left-0 right-0 bottom-0 top-0 z-40 m-auto flex h-max w-[80%] flex-col gap-y-2 rounded-3xl bg-white p-9 text-xl font-medium tracking-tighter shadow-xl transition-all sm:w-[60%] lg:w-[35%]",
                                    style: {
                                        transform: ea ? "translate(0%, 0%)" : "translate(0%, 400%)",
                                        transitionDuration: "500ms"
                                    },
                                    children: [(0, r.jsxs)("div", {
                                        className: "h-max rounded-t-3xl text-main-color",
                                        children: [(0, r.jsx)("h5", {
                                            className: "text-left font-title text-[25px] font-bold tracking-tight text-main-color",
                                            children: "USDT Allowance Information"
                                        }), (0, r.jsxs)("p", {
                                            className: "mt-6 text-left text-xl font-normal leading-8 text-slate-700",
                                            children: ["Your allowance is already set to : $", R, " USDT", (0, r.jsx)("br", {}), "If you want to buy with USDT, you need to buy this amount first."]
                                        })]
                                    }), (0, r.jsx)("button", {
                                        className: "mt-[25px] mb-[10px] inline-flex h-[60px] w-full place-items-center items-center justify-center rounded-md bg-green-500 px-3 py-2 text-sm font-medium leading-4 text-white shadow-sm hover:bg-green-600",
                                        onClick: () => er(!1),
                                        children: "I understand"
                                    })]
                                }), ea && (0, r.jsx)("div", {
                                    className: "fixed left-0 top-0 z-30 h-[100vh] w-[100vw] bg-black/25"
                                })]
                            })
                        })
                    })
                })
            }
        },
        77922: function(e, t, a) {
            "use strict";
            a.d(t, {
                Z: function() {
                    return l
                }
            });
            var r = a(85893);
            let s = [{
                name: "Telegram",
                href: "https://t.me/ecoterraio",
                icon: e => (0, r.jsx)("svg", {
                    fill: "currentColor",
                    viewBox: "0 0 16 16",
                    ...e,
                    children: (0, r.jsx)("path", {
                        fillRule: "evenodd",
                        d: "M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.287 5.906c-.778.324-2.334.994-4.666 2.01-.378.15-.577.298-.595.442-.03.243.275.339.69.47l.175.055c.408.133.958.288 1.243.294.26.006.549-.1.868-.32 2.179-1.471 3.304-2.214 3.374-2.23.05-.012.12-.026.166.016.047.041.042.12.037.141-.03.129-1.227 1.241-1.846 1.817-.193.18-.33.307-.358.336a8.154 8.154 0 0 1-.188.186c-.38.366-.664.64.015 1.088.327.216.589.393.85.571.284.194.568.387.936.629.093.06.183.125.27.187.331.236.63.448.997.414.214-.02.435-.22.547-.82.265-1.417.786-4.486.906-5.751a1.426 1.426 0 0 0-.013-.315.337.337 0 0 0-.114-.217.526.526 0 0 0-.31-.093c-.3.005-.763.166-2.984 1.09z",
                        clipRule: "evenodd"
                    })
                })
            }, {
                name: "Twitter",
                href: "https://twitter.com/ecoterraio",
                icon: e => (0, r.jsx)("svg", {
                    fill: "currentColor",
                    viewBox: "0 0 16 16",
                    ...e,
                    children: (0, r.jsx)("path", {
                        d: "M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"
                    })
                })
            }, {
                name: "Instagram",
                href: "https://www.instagram.com/ecoterra3r",
                icon: e => (0, r.jsx)("svg", {
                    fill: "currentColor",
                    viewBox: "0 0 16 16",
                    ...e,
                    children: (0, r.jsx)("path", {
                        fillRule: "evenodd",
                        d: "M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z",
                        clipRule: "evenodd"
                    })
                })
            }, {
                name: "Discord",
                href: "https://discord.gg/Bc9qPUzmX4",
                icon: e => (0, r.jsx)("svg", {
                    fill: "currentColor",
                    viewBox: "0 0 16 16",
                    ...e,
                    children: (0, r.jsx)("path", {
                        fillRule: "evenodd",
                        d: "M13.545 2.907a13.227 13.227 0 0 0-3.257-1.011.05.05 0 0 0-.052.025c-.141.25-.297.577-.406.833a12.19 12.19 0 0 0-3.658 0 8.258 8.258 0 0 0-.412-.833.051.051 0 0 0-.052-.025c-1.125.194-2.22.534-3.257 1.011a.041.041 0 0 0-.021.018C.356 6.024-.213 9.047.066 12.032c.001.014.01.028.021.037a13.276 13.276 0 0 0 3.995 2.02.05.05 0 0 0 .056-.019c.308-.42.582-.863.818-1.329a.05.05 0 0 0-.01-.059.051.051 0 0 0-.018-.011 8.875 8.875 0 0 1-1.248-.595.05.05 0 0 1-.02-.066.051.051 0 0 1 .015-.019c.084-.063.168-.129.248-.195a.05.05 0 0 1 .051-.007c2.619 1.196 5.454 1.196 8.041 0a.052.052 0 0 1 .053.007c.08.066.164.132.248.195a.051.051 0 0 1-.004.085 8.254 8.254 0 0 1-1.249.594.05.05 0 0 0-.03.03.052.052 0 0 0 .003.041c.24.465.515.909.817 1.329a.05.05 0 0 0 .056.019 13.235 13.235 0 0 0 4.001-2.02.049.049 0 0 0 .021-.037c.334-3.451-.559-6.449-2.366-9.106a.034.034 0 0 0-.02-.019Zm-8.198 7.307c-.789 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.45.73 1.438 1.613 0 .888-.637 1.612-1.438 1.612Zm5.316 0c-.788 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.451.73 1.438 1.613 0 .888-.631 1.612-1.438 1.612Z",
                        clipRule: "evenodd"
                    })
                })
            }, {
                name: "Medium",
                href: "https://medium.com/@eco_terra",
                icon: e => (0, r.jsx)("svg", {
                    fill: "currentColor",
                    viewBox: "0 0 16 16",
                    ...e,
                    children: (0, r.jsx)("path", {
                        fillRule: "evenodd",
                        d: "M9.025 8c0 2.485-2.02 4.5-4.513 4.5A4.506 4.506 0 0 1 0 8c0-2.486 2.02-4.5 4.512-4.5A4.506 4.506 0 0 1 9.025 8zm4.95 0c0 2.34-1.01 4.236-2.256 4.236-1.246 0-2.256-1.897-2.256-4.236 0-2.34 1.01-4.236 2.256-4.236 1.246 0 2.256 1.897 2.256 4.236zM16 8c0 2.096-.355 3.795-.794 3.795-.438 0-.793-1.7-.793-3.795 0-2.096.355-3.795.794-3.795.438 0 .793 1.699.793 3.795z",
                        clipRule: "evenodd"
                    })
                })
            }];

            function l(e) {
                let {
                    section: t = "footer"
                } = e;
                return (0, r.jsx)("div", {
                    className: "flex space-x-6",
                    children: s.map(e => (0, r.jsxs)("a", {
                        href: e.href,
                        target: "_blank",
                        rel: "noopener noreferrer",
                        className: "footer" === t ? "text-gray-200 transition-colors hover:text-white" : "text-main-color/90 transition-colors hover:text-blue-500",
                        children: [(0, r.jsx)("span", {
                            className: "sr-only",
                            children: e.name
                        }), (0, r.jsx)(e.icon, {
                            className: "Discord" !== e.name ? "h-6 w-6" : "-mt-0.5 ml-0.5 h-7 w-7",
                            "aria-hidden": "true"
                        })]
                    }, e.name))
                })
            }
        },
        71170: function(e) {
            e.exports = {
                loader: "Progress_loader__rT5B0",
                slideInBar: "Progress_slideInBar__HpEkD"
            }
        },
        46601: function() {},
        89214: function() {},
        85568: function() {}
    }
]);