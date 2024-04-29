import { useState, useEffect } from "react";
import { Image } from "../atoms/Image";
// import { Button } from "../atoms/Button"
import Logo from "../../assets/logo.png";
import { NavLinks } from "../particles/DataLists";
import { List } from "../atoms/List";
// import { NavLink } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { ArrowCircleRight, CirclesFour } from "@phosphor-icons/react";
import { Slide } from "react-awesome-reveal";

const NavBar = () => {
  // const navigate = useNavigate()

  const [open, setOpen] = useState(false);
  // const [scrollY, setScrollY] = useState(0)
  const [navBarColor, setNavBarColor] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState<boolean[]>(
    new Array(NavLinks.length).fill(false)
  );

  const handleToggle = () => {
    setOpen(!open);
  };

  const listenScrollEvent = () => {
    window.scrollY > 10 ? setNavBarColor(true) : setNavBarColor(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);
    return () => {
      window.removeEventListener("scroll", listenScrollEvent);
    };
  }, []);

  return (
    <header className="w-full h-auto bg-transparent fixed z-50 top-0 left-0 mt-3">
      <Slide direction="down">
        <nav
          className={`md:h-24 h-20 ${
            navBarColor ? "bg-transparent" : "bg-transparent"
          } lg:px-24 md:px-12 px-8 flex justify-between items-center py-4`}
        >
          <div className="md:w-[100px] w-[80px]">
            <Image
              as="a"
              href="/"
              className="md:h-10 h-8"
              style={{ height: "8.5rem" }}
              image={Logo}
              alt="Logo"
            />
          </div>

          <div className="lg:flex hidden items-center gap-20">
            <ul className="flex items-center justify-center gap-8">
              {NavLinks.map((navlink, index) => (
                <List
                  className="w-full text-base white-space-nowrap"
                  key={index}
                >
                  <div
                    className="relative group"
                    onMouseEnter={() => {
                      if (navlink.dropdown) {
                        setDropdownOpen((prevState) => {
                          const newState = [...prevState];
                          newState[index] = true;
                          return newState;
                        });
                      }
                    }}
                    onMouseLeave={() => {
                      if (navlink.dropdown) {
                        setDropdownOpen((prevState) => {
                          const newState = [...prevState];
                          newState[index] = false;
                          return newState;
                        });
                      }
                    }}
                  >
                    <HashLink
                      smooth
                      to={navlink.url || "#"}
                      className="relative inline-block overflow-hidden pt-2 pl-2 before:w-2 before:h-2 before:bg-color2 before:absolute before:top-2 before:-left-10 before:rounded-full before:transition-all before:duration-200 before:ease-in hover:before:left-0.5 after:w-0.5 after:h-3 after:bg-color2 after:absolute after:left-1 after:-top-10 hover:after:top-3.5 after:transition-all after:duration-200 after:ease-in"
                    >
                      {navlink.name}
                    </HashLink>

                    {navlink.dropdown && dropdownOpen[index] && (
                      <div className="absolute left-0 mt-0 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 transition-opacity duration-200">
                        <div
                          className="py-1"
                          role="menu"
                          aria-orientation="vertical"
                          aria-labelledby="options-menu"
                        >
                          {navlink.dropdown.map((item, index) => (
                            <a
                              href={item.url}
                              className="block px-4 py-2 text-sm text-gray-700"
                              role="menuitem"
                              key={index}
                            >
                              {item.name}
                            </a>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </List>
              ))}
            </ul>
            {/* <ul className="flex items-center justify-center gap-6">
                            {
                                NavButtons.map((navbutton, index) => (
                                    <List className="w-full" key={index}>
                                        <Button onClick={() => navigate(navbutton.url)} type="button" className={`${navbutton.name === "Signup" ? "border-2 border-gray-950 before:top-0" : "before:bottom-0 border-b-2 border-transparent hover:border-gray-950"} py-2 px-8 relative z-10 before:content-[''] before:absolute before:left-0 before:w-full before:h-0 before:bg-color2 before:-z-10 hover:before:h-full before:transition-all before:duration-300 before:ease-in text-base`}>{navbutton.name}</Button>
                                    </List>
                                ))
                            }
                            <List className="text-gray-950">
                                <select className="border-none font-light text-base outline-none bg-transparent">
                                    <option value="EN" selected>EN</option>
                                    <option value="ITA">ITA</option>
                                    <option value="FRA">FRA</option>
                                </select>
                            </List>
                        </ul> */}
          </div>
          <div className="lg:hidden flex gap-4 items-center">
            {/* <select className="border-none outline-none font-light text-sm bg-transparent">
              <option value="EN" selected>
                EN
              </option>
              <option value="ITA">ITA</option>
              <option value="FRA">FRA</option>
            </select> */}
            <div
              className="hamburger text-gray-950 cursor-pointer"
              onClick={handleToggle}
            >
              <CirclesFour size={30} color="currentColor" weight="fill" />
            </div>
          </div>
        </nav>
      </Slide>

      {/* Mobile Nav  */}
      <nav
        className={`flex justify-end lg:hidden h-screen w-full bg-gray-950/90 fixed top-0  ${
          open ? "right-0" : "-right-[120vw]"
        } transition-all duration-500 ease-out`}
      >
        <div
          className={`w-[70%] h-screen bg-gray-600 flex flex-col justify-between items-center relative ${
            open ? "right-0" : "-right-[120vw]"
          } transition-all duration-500 ease-out delay-300`}
        >
          <section className="w-full px-4 py-6 flex flex-col gap-16">
            <div className="w-full flex justify-between items-center">
              <Image
                as="a"
                href="/"
                className="md:h-10 h-8"
                image={Logo}
                alt="Logo"
              />
              <div
                className="hamburger text-gray-950 cursor-pointer"
                // onClick={handleToggle}
              >
                <ArrowCircleRight
                  size={25}
                  color="currentColor"
                  weight="fill"
                />
              </div>
            </div>
            <ul className="flex flex-col gap-3 pl-2">
              {NavLinks.map((navlink, index) => (
                <List className="w-full text-base" key={index}>
                  <div className="relative">
                    <span
                      onClick={() => {
                        if (navlink.dropdown) {
                          setDropdownOpen((prevState) => {
                            const newState = [...prevState];
                            newState[index] = !newState[index];
                            return newState;
                          });
                        } else {
                          // navigate(navlink.url)
                          handleToggle();
                        }
                      }}
                      className={`relative overflow-hidden inline-block before:w-full before:h-0.5 before:bg-color2 before:absolute before:bottom-0 before:-left-full before:rounded-full before:transition-all before:duration-200 before:ease-in hover:before:left-0 `}
                    >
                      {navlink.name}
                    </span>

                    {navlink.dropdown && dropdownOpen[index] && (
                      <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-10">
                        <div
                          className="py-1"
                          role="menu"
                          aria-orientation="vertical"
                          aria-labelledby="options-menu"
                          onClick={handleToggle}
                        >
                          {navlink.dropdown.map((item, index) => (
                            <HashLink
                              to={item.url}
                              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                              role="menuitem"
                              key={index}
                            >
                              {item.name}
                            </HashLink>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </List>
              ))}
            </ul>
          </section>
          {/* <ul className="w-full flex items-center justify-center pb-24 gap-4">
                {
                    NavButtons.map((navbutton, index) => (
                        <List className="w-auto" key={index}>
                            <Button onClick={() => navigate(navbutton.url)} type="button" className={`${navbutton.name === "Signup" ? "border-2 border-gray-950 before:top-0" : "before:bottom-0 border-b-2 border-white hover:border-gray-950"} py-1.5 px-5 relative z-10 before:content-[''] before:absolute before:left-0 before:w-full before:h-0 before:bg-color2 before:-z-10 hover:before:h-full before:transition-all before:duration-300 before:ease-in text-base`}>{navbutton.name}</Button>
                        </List>
                    ))
                }
            </ul> */}
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
