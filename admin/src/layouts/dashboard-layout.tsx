import StoreSwitcher from "@/components/store-switcher";
import ThemeToggle from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

import { useToken } from "@/contexts/access-token";

import {
  BookMarked,
  CircleUser,
  Home,
  ListOrdered,
  Menu,
  PaintBucket,
  Search,
  Settings,
  ShoppingBasket,
} from "lucide-react";
import { NavLink, Navigate, Outlet } from "react-router-dom";

const DashboardLayout = () => {
  const { token, setToken } = useToken((state) => state);

  if (token === "") {
    return <Navigate to={"/admin/auth/login"} replace />;
  }

  const logout = () => {
    setToken("");
  };

  return (
    <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
      <div className="hidden border-r bg-muted/40 md:block">
        <div className="flex h-full max-h-screen flex-col gap-2">
          <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
            <StoreSwitcher />
          </div>

          {/* SIDEBAR */}
          <div className="flex-1">
            <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
              <NavLink
                to="/admin/dashboard/home"
                className={({ isActive }) => {
                  return `flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary ${
                    isActive && "bg-muted"
                  }`;
                }}
              >
                <Home className="h-4 w-4" />
                Overview
              </NavLink>

              <NavLink
                to="/admin/dashboard/vendors"
                className={({ isActive }) => {
                  return `flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary ${
                    isActive && "bg-muted"
                  }`;
                }}
              >
                <ShoppingBasket className="h-4 w-4" />
                Vendors{" "}
              </NavLink>
              <NavLink
                to="/admin/dashboard/categories"
                className={({ isActive }) => {
                  return `flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary ${
                    isActive && "bg-muted"
                  }`;
                }}
              >
                <BookMarked className="h-4 w-4" />
                Categories{" "}
              </NavLink>
              <NavLink
                to="/admin/dashboard/orders"
                className={({ isActive }) => {
                  return `flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary ${
                    isActive && "bg-muted"
                  }`;
                }}
              >
                <ListOrdered className="h-4 w-4" />
                Orders{" "}
              </NavLink>
              <NavLink
                to="/admin/dashboard/products"
                className={({ isActive }) => {
                  return `flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary ${
                    isActive && "bg-muted"
                  }`;
                }}
              >
                <PaintBucket className="h-4 w-4" />
                Products{" "}
              </NavLink>

              <NavLink
                to="/admin/dashboard/settings"
                className={({ isActive }) => {
                  return `flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary ${
                    isActive && "bg-muted"
                  }`;
                }}
              >
                <Settings className="h-4 w-4" />
                Settings{" "}
              </NavLink>
            </nav>
          </div>
        </div>
      </div>

      <div className="flex flex-col">
        <header className="flex h-14 items-center gap-1 border-b bg-muted/40 px-4 lg:h-[60px] lg:px-6">
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="shrink-0 md:hidden"
              >
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>

            <SheetContent side="left" className="flex flex-col">
              <nav className="grid gap-2 text-lg font-medium">
                <StoreSwitcher />

                <NavLink
                  to="/admin/dashboard"
                  className={({ isActive }) => {
                    return `flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary ${
                      isActive && "bg-muted"
                    }`;
                  }}
                >
                  <Home className="h-4 w-4" />
                  Overview
                </NavLink>

                <NavLink
                  to="/admin/dashboard/billboards"
                  className={({ isActive }) => {
                    return `flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary ${
                      isActive && "bg-muted"
                    }`;
                  }}
                >
                  <BookMarked className="h-4 w-4" />
                  Billboards{" "}
                </NavLink>
                <NavLink
                  to="/admin/dashboard/categories"
                  className={({ isActive }) => {
                    return `flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary ${
                      isActive && "bg-muted"
                    }`;
                  }}
                >
                  <BookMarked className="h-4 w-4" />
                  Categories{" "}
                </NavLink>
                <NavLink
                  to="/admin/dashboard/orders"
                  className={({ isActive }) => {
                    return `flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary ${
                      isActive && "bg-muted"
                    }`;
                  }}
                >
                  <ListOrdered className="h-4 w-4" />
                  Orders{" "}
                </NavLink>
                <NavLink
                  to="/admin/dashboard/products"
                  className={({ isActive }) => {
                    return `flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary ${
                      isActive && "bg-muted"
                    }`;
                  }}
                >
                  <PaintBucket className="h-4 w-4" />
                  Products{" "}
                </NavLink>

                <NavLink
                  to="/admin/dashboard/settings"
                  className={({ isActive }) => {
                    return `flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary ${
                      isActive && "bg-muted"
                    }`;
                  }}
                >
                  <Settings className="h-4 w-4" />
                  Settings{" "}
                </NavLink>
              </nav>
            </SheetContent>
          </Sheet>

          <div className="w-full flex-1">
            <form>
              <div className="relative">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search products..."
                  className="w-full appearance-none bg-background pl-8 shadow-none md:w-2/3 lg:w-1/3"
                />
              </div>
            </form>
          </div>

          <ThemeToggle />
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="secondary" size="icon" className="rounded-full">
                <CircleUser className="h-5 w-5" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Settings</DropdownMenuItem>
              <DropdownMenuItem>Support</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <Button onClick={logout} variant={"link"}>
                  Logout
                </Button>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </header>

        <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
