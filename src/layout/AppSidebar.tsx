import { useCallback, useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router";
import {
  BoxCubeIcon,
  ChevronDownIcon,
  GridIcon,
  HorizontaLDots,
  ListIcon,
  PageIcon,
  PieChartIcon,
  TableIcon,
  UserCircleIcon,
} from "../icons";
import { useSidebar } from "../context/SidebarContext";

type NavItem = {
  name: string;
  icon: React.ReactNode;
  path?: string;
  subItems?: { name: string; path: string; pro?: boolean; new?: boolean }[];
};

const navItems: NavItem[] = [
  { icon: <GridIcon />, name: "Dashboard", subItems: [] },
  { icon: <UserCircleIcon />, name: "Recruitment", path: "/" },
  { name: "Schedule", icon: <ListIcon />, subItems: [] },
  { name: "Employee", icon: <TableIcon />, subItems: [] },
  { name: "Department", icon: <PageIcon />, subItems: [] },
];

const othersItems: NavItem[] = [
  { icon: <PieChartIcon />, name: "Support", subItems: [] },
  { icon: <BoxCubeIcon />, name: "Settings", subItems: [] },
];

const AppSidebar: React.FC = () => {
  const { isExpanded, isMobileOpen, isHovered, setIsHovered } = useSidebar();
  const location = useLocation();

  // ✅ Corrected type for openSubmenu to match function usage
  const [openSubmenu, setOpenSubmenu] = useState<{
    type: "main" | "others";
    index: number;
  } | null>(null);
  const [subMenuHeight, setSubMenuHeight] = useState<Record<string, number>>(
    {}
  );
  const subMenuRefs = useRef<Record<string, HTMLDivElement | null>>({});

  const isActive = useCallback(
    (path: string) => location.pathname === path,
    [location.pathname]
  );

  useEffect(() => {
    let submenuMatched = false;

    (["main", "others"] as const).forEach((menuType) => {
      const items = menuType === "main" ? navItems : othersItems;
      items.forEach((nav, index) => {
        if (nav.subItems?.length) {
          nav.subItems.forEach((subItem) => {
            if (isActive(subItem.path)) {
              setOpenSubmenu({ type: menuType, index });
              submenuMatched = true;
            }
          });
        }
      });
    });

    if (!submenuMatched) {
      setOpenSubmenu(null);
    }
  }, [location, isActive]);

  useEffect(() => {
    if (openSubmenu !== null) {
      const key = `${openSubmenu.type}-${openSubmenu.index}`;
      if (subMenuRefs.current[key]) {
        setSubMenuHeight((prevHeights) => ({
          ...prevHeights,
          [key]: subMenuRefs.current[key]?.scrollHeight || 0,
        }));
      }
    }
  }, [openSubmenu]);

  // ✅ Fixed type issue in the function
  const handleSubmenuToggle = (index: number, menuType: "main" | "others") => {
    setOpenSubmenu((prevOpenSubmenu) =>
      prevOpenSubmenu?.type === menuType && prevOpenSubmenu?.index === index
        ? null
        : { type: menuType, index }
    );
  };

  return (
    <aside
      className={`fixed mt-16 flex flex-col lg:mt-0 top-0 px-5 left-0 bg-white dark:bg-gray-900 dark:border-gray-800 text-gray-900 h-screen transition-all duration-300 ease-in-out z-50 border-r border-gray-200 
        ${
          isExpanded || isMobileOpen
            ? "w-[290px]"
            : isHovered
            ? "w-[290px]"
            : "w-[90px]"
        }
        ${isMobileOpen ? "translate-x-0" : "-translate-x-full"}
        lg:translate-x-0`}
      onMouseEnter={() => !isExpanded && setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="py-8 flex justify-start">
        <Link to="/">
          {isExpanded || isHovered || isMobileOpen ? (
            <>
              <p className="text-4xl font-bold">WeHR</p>
              <img
                className="hidden dark:block"
                src="/images/logo/logo-dark.svg"
                alt="Logo"
                width={150}
                height={40}
              />
            </>
          ) : (
            <img
              src="/images/logo/logo-icon.svg"
              alt="Logo"
              width={32}
              height={32}
            />
          )}
        </Link>
      </div>
      <div className="flex flex-col overflow-y-auto duration-300 ease-linear no-scrollbar">
        <nav className="mb-6">
          <div className="flex flex-col gap-4">
            <div>
              <h2 className="mb-4 text-xs uppercase text-gray-400">
                {isExpanded || isHovered || isMobileOpen ? (
                  "Menu"
                ) : (
                  <HorizontaLDots />
                )}
              </h2>
              <ul>
                {navItems.map((nav, index) => (
                  <li key={nav.name}>
                    <button
                      onClick={() => handleSubmenuToggle(index, "main")}
                      className={`menu-item ${
                        openSubmenu?.type === "main" &&
                        openSubmenu?.index === index
                          ? "menu-item-active"
                          : "menu-item-inactive"
                      }`}
                    >
                      {nav.icon}
                      {(isExpanded || isHovered || isMobileOpen) && (
                        <span>{nav.name}</span>
                      )}
                      {nav.subItems?.length ? (
                        <ChevronDownIcon
                          className={`${
                            openSubmenu?.type === "main" &&
                            openSubmenu?.index === index
                              ? "rotate-180"
                              : ""
                          }`}
                        />
                      ) : null}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="mb-4 text-xs uppercase text-gray-400">
                {isExpanded || isHovered || isMobileOpen ? (
                  "Others"
                ) : (
                  <HorizontaLDots />
                )}
              </h2>
              <ul>
                {othersItems.map((nav, index) => (
                  <li key={nav.name}>
                    <button
                      onClick={() => handleSubmenuToggle(index, "others")}
                      className={`menu-item ${
                        openSubmenu?.type === "others" &&
                        openSubmenu?.index === index
                          ? "menu-item-active"
                          : "menu-item-inactive"
                      }`}
                    >
                      {nav.icon}
                      {(isExpanded || isHovered || isMobileOpen) && (
                        <span>{nav.name}</span>
                      )}
                      {nav.subItems?.length ? (
                        <ChevronDownIcon
                          className={`${
                            openSubmenu?.type === "others" &&
                            openSubmenu?.index === index
                              ? "rotate-180"
                              : ""
                          }`}
                        />
                      ) : null}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </aside>
  );
};

export default AppSidebar;
