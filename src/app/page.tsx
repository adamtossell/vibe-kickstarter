"use client";

import React, { useState, useMemo } from "react";
import { DefaultPageLayout } from "@/ui/layouts/DefaultPageLayout";
import { TextField } from "@/ui/components/TextField";
import { Button } from "@/ui/components/Button";
import { DropdownMenu } from "@/ui/components/DropdownMenu";
import * as SubframeCore from "@subframe/core";
import { Avatar } from "@/ui/components/Avatar";
import { TopbarWithSearch } from "@/ui/components/TopbarWithSearch";
import { Select } from "@/ui/components/Select";
import { Badge } from "@/ui/components/Badge";
import { IconButton } from "@/ui/components/IconButton";
import { StarterCard } from "@/ui/components/StarterCard";
import { 
  FeatherSearch,
  FeatherUser,
  FeatherHeart,
  FeatherLogOut,
  FeatherCopy,
  FeatherGlobe,
  FeatherGithub,
  FeatherAlertCircle,
  FeatherChevronLeft,
  FeatherChevronRight
} from "@subframe/core";
import Image from "next/image";

// Define the possible sort options
type SortOption = "Popular" | "Latest" | "Featured" | "Name A-Z" | "Name Z-A";

function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const [sortCriteria, setSortCriteria] = useState<SortOption>("Popular"); // Default sort criteria

  const allCards = [
    {
      image: "https://res.cloudinary.com/subframe/image/upload/v1744289393/uploads/8775/y5ijy4brcjyzygxrpper.png",
      title: "Firebase studio",
      subtext: "Meet Firebase Studio: A cloud-based, agentic dev environment powered by Gemini.",
      featured: true,
      tags: ["Text-to-app", "Gemini"]
    },
    {
      image: "https://res.cloudinary.com/subframe/image/upload/v1744288880/uploads/8775/fl1rjda1gt1f2fle26yv.svg",
      title: "Supabase client libraries",
      subtext: "Supabase client for Next.js",
      featured: true,
      tags: ["Component", "React", "Next.js"]
    },
    {
      image: "https://res.cloudinary.com/subframe/image/upload/v1744288880/uploads/8775/fl1rjda1gt1f2fle26yv.svg",
      title: "Supabase password based auth",
      subtext: "Password-based authentication block for Next.js",
      featured: true,
      tags: ["Component", "React", "Next.js"]
    },
    {
      image: "https://res.cloudinary.com/subframe/image/upload/v1744288880/uploads/8775/fl1rjda1gt1f2fle26yv.svg",
      title: "Supabase dropzone (file upload)",
      subtext: "Displays a control for easier uploading of files directly to Supabase Storage",
      featured: false,
      tags: ["Component", "React", "Next.js"]
    },
    {
      image: "https://res.cloudinary.com/subframe/image/upload/v1744293408/uploads/8775/sstvdf7affl3rtvb5gyc.svg",
      title: "Next.js starter project",
      subtext: "Create a Next.js app",
      featured: false,
      tags: ["React", "Next.js"]
    },
    {
      image: "https://res.cloudinary.com/subframe/image/upload/v1744288880/uploads/8775/fl1rjda1gt1f2fle26yv.svg",
      title: "Supabase realtime cursor",
      subtext: "Real-time cursor sharing for collaborative applications",
      featured: false,
      tags: ["Component", "React", "Next.js"]
    },
    {
      image: "https://res.cloudinary.com/subframe/image/upload/v1744288880/uploads/8775/fl1rjda1gt1f2fle26yv.svg",
      title: "Supabase current user avatar",
      subtext: "Supabase Auth-aware avatar",
      featured: false,
      tags: ["Component", "React", "Next.js"]
    },
    {
      image: "https://res.cloudinary.com/subframe/image/upload/v1744299440/uploads/8775/bt4naqfmjbfbkac9qeom.png",
      title: "AI chatbot",
      subtext: "Meet Firebase Studio: A cloud-based, agentic dev environment powered by Gemini.",
      featured: false,
      tags: ["Text-to-app", "Gemini"]
    },
    {
      image: "https://res.cloudinary.com/subframe/image/upload/v1744288880/uploads/8775/fl1rjda1gt1f2fle26yv.svg",
      title: "Supabase realtime avatar stack",
      subtext: "Avatar stack in realtime",
      featured: false,
      tags: ["Component", "React", "Next.js"]
    },
    {
      image: "https://res.cloudinary.com/subframe/image/upload/v1744288880/uploads/8775/fl1rjda1gt1f2fle26yv.svg",
      title: "Supabase realtime chat",
      subtext: "Real-time chat component for collaborative applications",
      featured: false,
      tags: ["Component", "React", "Next.js"]
    },
    {
      image: "https://res.cloudinary.com/subframe/image/upload/v1744288880/uploads/8775/fl1rjda1gt1f2fle26yv.svg",
      title: "Supabase prompt rules",
      subtext: "Rules for AI Code Editors for Supabase",
      featured: false,
      tags: ["Component", "React", "Next.js"]
    }
  ];

  const filteredCards = useMemo(() => {
    return allCards.filter(card => {
      const searchLower = searchQuery.toLowerCase();
      return (
        card.title.toLowerCase().includes(searchLower) ||
        card.subtext.toLowerCase().includes(searchLower) ||
        card.tags.some(tag => tag.toLowerCase().includes(searchLower))
      );
    });
  }, [searchQuery, allCards]);

  const sortedAndFilteredCards = useMemo(() => {
    const cardsToSort = [...filteredCards]; // Create a mutable copy

    switch (sortCriteria) {
      case "Name A-Z":
        cardsToSort.sort((a, b) => a.title.localeCompare(b.title));
        break;
      case "Name Z-A":
        cardsToSort.sort((a, b) => b.title.localeCompare(a.title));
        break;
      case "Featured":
        // Sort featured items first, then alphabetically by title
        cardsToSort.sort((a, b) => {
          if (a.featured && !b.featured) return -1;
          if (!a.featured && b.featured) return 1;
          return a.title.localeCompare(b.title); // Secondary sort by name
        });
        break;
      // Placeholder logic for Popular and Latest as data is missing
      case "Popular":
         // Example: Treat featured as popular for now
         cardsToSort.sort((a, b) => {
          if (a.featured && !b.featured) return -1;
          if (!a.featured && b.featured) return 1;
          return a.title.localeCompare(b.title); 
        });
        break;
      case "Latest":
        // No date info, keep the filtered order (or implement date logic if available)
        break; 
      default:
        // Default to Name A-Z if criteria is unknown
        cardsToSort.sort((a, b) => a.title.localeCompare(b.title));
    }
    return cardsToSort;
  }, [filteredCards, sortCriteria]);

  return (
    <DefaultPageLayout>
      <div className="flex h-full w-full flex-col items-start gap-0 bg-default-background">
        <TopbarWithSearch
          leftSlot={
            <TextField
              className="h-auto max-w-[448px] grow shrink-0 basis-0"
              variant="filled"
              label=""
              helpText=""
              icon={<FeatherSearch />}
            >
              <TextField.Input
                placeholder="Search"
                value={searchQuery}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => setSearchQuery(event.target.value)}
              />
            </TextField>
          }
          rightSlot={
            <>
              <div className="flex items-center justify-end gap-2">
                <Button
                  variant="neutral-tertiary"
                  onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
                >
                  Log in
                </Button>
                <Button
                  variant="brand-secondary"
                  onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
                >
                  Sign up
                </Button>
              </div>
              <SubframeCore.DropdownMenu.Root>
                <SubframeCore.DropdownMenu.Trigger asChild={true}>
                  <Avatar image="https://res.cloudinary.com/subframe/image/upload/v1744230011/uploads/8775/yaqxzaqkgtylv7tigs22.png">
                    A
                  </Avatar>
                </SubframeCore.DropdownMenu.Trigger>
                <SubframeCore.DropdownMenu.Portal>
                  <SubframeCore.DropdownMenu.Content
                    side="bottom"
                    align="start"
                    sideOffset={4}
                    asChild={true}
                  >
                    <DropdownMenu>
                      <DropdownMenu.DropdownItem icon={<FeatherUser />}>
                        Profile
                      </DropdownMenu.DropdownItem>
                      <DropdownMenu.DropdownItem icon={<FeatherHeart />}>
                        Favorites
                      </DropdownMenu.DropdownItem>
                      <div className="flex w-full flex-col items-start py-2">
                        <div className="flex h-px w-full flex-none flex-col items-center gap-2 bg-neutral-border" />
                      </div>
                      <DropdownMenu.DropdownItem icon={<FeatherLogOut />}>
                        Sign out
                      </DropdownMenu.DropdownItem>
                    </DropdownMenu>
                  </SubframeCore.DropdownMenu.Content>
                </SubframeCore.DropdownMenu.Portal>
              </SubframeCore.DropdownMenu.Root>
            </>
          }
        />
        <div className="flex w-full flex-col items-start gap-6 px-4 py-4">
          <span className="w-full text-display font-display text-default-font">
            Kick Start Your Vibe Coding Projects
          </span>
          <div className="flex w-full flex-col items-start gap-2">
            <div className="flex w-full items-start gap-4 justify-between">
              <Button
                variant="neutral-secondary"
                onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
              >
                Submit to vibe starter
              </Button>
              <Select
                disabled={false}
                error={false}
                label=""
                placeholder="Sort"
                helpText=""
                icon={null}
                value={sortCriteria}
                onValueChange={(value: string) => setSortCriteria(value as SortOption)}
              >
                <Select.Item value="Popular">Popular</Select.Item>
                <Select.Item value="Latest">Latest</Select.Item>
                <Select.Item value="Featured">Featured</Select.Item>
                <Select.Item value="Name A-Z">Name A-Z</Select.Item>
                <Select.Item value="Name Z-A">Name Z-A</Select.Item>
              </Select>
            </div>
            <div className="grid w-full grid-cols-3 gap-4">
              {sortedAndFilteredCards.map((card, index) => (
                <StarterCard
                  key={index}
                  image={card.image}
                  title={card.title}
                  subtext={card.subtext}
                  snippet1="npx shadcn@latest add https://supabase.com/ui/r/supabase-client-nextjs.json"
                  snippet2="pnpm dlx shadcn@latest add https://supabase.com/ui/r/supabase-client-nextjs.json"
                  snippet3="yarn dlx shadcn@latest add https://supabase.com/ui/r/supabase-client-nextjs.json"
                  snippet4="bunx --bun shadcn@latest add https://supabase.com/ui/r/supabase-client-nextjs.json"
                  icon={<FeatherCopy />}
                  featured={card.featured}
                  codeBadges={
                    <>
                      <div className="flex h-20 w-full flex-none items-start gap-2 rounded-md border border-solid border-neutral-100 bg-neutral-50 px-2 py-2 shadow-sm">
                        <span className="line-clamp-1 grow shrink-0 basis-0 self-stretch text-monospace-body font-monospace-body text-subtext-color">
                          npx shadcn@latest add https://supabase.com/ui/r/supabase-client-nextjs.json
                        </span>
                        <FeatherCopy className="font-['Inter'] text-[16px] font-[600] leading-[16px] text-neutral-400" />
                      </div>
                      <div className="flex w-full items-start gap-1">
                        {card.tags.map((tag, tagIndex) => (
                          <Badge key={tagIndex} variant="neutral">{tag}</Badge>
                        ))}
                      </div>
                    </>
                  }
                  badgeIcon={
                    <>
                      {card.featured ? <Badge>Featured</Badge> : <Badge className="hidden">Featured</Badge>}
                      <IconButton
                        disabled={false}
                        variant="neutral-secondary"
                        size="small"
                        icon={<FeatherGlobe />}
                        loading={false}
                        onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
                      />
                      <IconButton
                        disabled={false}
                        variant="neutral-secondary"
                        size="small"
                        icon={<FeatherHeart />}
                        loading={false}
                        onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
                      />
                    </>
                  }
                />
              ))}
            </div>
          </div>
          {sortedAndFilteredCards.length === 0 && (
            <div className="flex w-full flex-col items-center gap-6 rounded-lg border border-solid border-neutral-100 bg-neutral-50 px-8 py-8 shadow-sm">
              <div className="flex w-full flex-col items-center gap-4">
                <div className="flex h-10 w-10 flex-none items-center justify-center gap-2 rounded-full border border-solid border-neutral-200 bg-default-background shadow-sm">
                  <FeatherAlertCircle className="font-['Inter'] text-[20px] font-[400] leading-[20px] text-neutral-700" />
                </div>
                <div className="flex w-full flex-col items-center gap-1">
                  <span className="line-clamp-1 text-heading-3 font-heading-3 text-default-font">
                    No results found
                  </span>
                  <span className="text-body font-body text-subtext-color">
                    Update your search to find some matching results
                  </span>
                </div>
              </div>
              <Button
                disabled={false}
                variant="brand-secondary"
                size="medium"
                icon={null}
                iconRight={null}
                loading={false}
                onClick={() => setSearchQuery("")}
              >
                Reset filters
              </Button>
            </div>
          )}
          <div className="flex w-full items-center justify-center gap-1">
            <IconButton
              icon={<FeatherChevronLeft />}
              onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
            />
            <div className="flex items-center justify-center gap-1">
              <Button
                variant="neutral-tertiary"
                onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
              >
                1
              </Button>
              <Button
                variant="neutral-tertiary"
                onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
              >
                2
              </Button>
              <Button
                variant="neutral-secondary"
                onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
              >
                3
              </Button>
              <Button
                variant="neutral-tertiary"
                onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
              >
                4
              </Button>
              <Button
                variant="neutral-tertiary"
                onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
              >
                5
              </Button>
            </div>
            <IconButton
              icon={<FeatherChevronRight />}
              onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
            />
          </div>
        </div>
      </div>
    </DefaultPageLayout>
  );
}

export default Home;
