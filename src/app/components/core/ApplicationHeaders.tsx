import {
  IconBrandGithubFilled,
  IconMail,
  IconBrandBluesky,
} from '@tabler/icons-react';
import {
  Box,
  Burger,
  Flex,
  Divider,
  Title,
  NavLink,
  Drawer,
  Group,
  ScrollArea,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import classes from './HeaderMegaMenu.module.css';
import Link from "next/link"

export interface HeaderProps {
  opened: boolean;
  toggle: () => void;
}

export interface NavigationItem {
  title: string;
  href: string;
}

export const navigationItems: NavigationItem[] = [
  {
    title: "Home",
    href: "/"
  },

  {
    title: "Projects",
    href: "#",
  },

  {
    title: "About me",
    href: "#",
  },
  {
    title: "Contact",
    href: "#",
  }
]

function Navigation({ items }: { items: NavigationItem[] }) {
  return (
    <div>
      {items.map((item) => (
        <Flex key={"navItems" + item.title} direction="row" wrap="wrap">
          <NavLink component={Link} label={item.title} href={item.href} />
        </Flex>
      ))}
    </div>
  )
}

export default function ApplicationHeaders() {
  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] = useDisclosure(false);

  return (
    <Box className="sticky top-0 z-50 antialiased">
      <header className={classes.header}>
        <Group justify="space-between" h="100%">
          <Title order={1}>Anascence</Title>

          <Group h="100%" gap={0} visibleFrom="sm" mr="sm" className="text-xl">
            {navigationItems.map((item) => (
              <div key={item.title} className="mr-5">
                <NavLink component={Link} label={item.title} href={item.href} className="rounded-md" />
              </div>
            ))}
          </Group>

          <Group visibleFrom="sm" gap="md">
            <IconBrandGithubFilled cursor="pointer" />
            <IconMail cursor="pointer" />
            <IconBrandBluesky cursor="pointer" />
          </Group>

          <Burger opened={drawerOpened} onClick={toggleDrawer} hiddenFrom="sm" />
        </Group>
      </header>

      <Drawer
        opened={drawerOpened}
        onClose={closeDrawer}
        size="100%"
        padding="md"
        title="Anascence"
        hiddenFrom="sm"
        zIndex={1000000}
      >
        <ScrollArea h="calc(100vh - 80px" mx="-md">
          <Divider my="sm" />
          <Navigation items={navigationItems} />
          <Divider my="sm" />

          <Group justify="center" grow pb="xl" px="md">
            <IconBrandGithubFilled cursor="pointer" />
            <IconMail cursor="pointer" />
            <IconBrandBluesky cursor="pointer" />
          </Group>
        </ScrollArea>
      </Drawer>
    </Box>
  );
}
