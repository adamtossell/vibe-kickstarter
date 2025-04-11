"use client";

import React from "react";
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

function Home() {
  return (
    <DefaultPageLayout>
      <div className="flex h-full w-full flex-col items-start gap-6 bg-default-background">
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
                value=""
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {}}
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
        <div className="flex w-full flex-col items-start gap-4">
          <div className="flex w-full items-end gap-4">
            <div className="flex grow shrink-0 basis-0 flex-col items-start gap-4">
              <span className="w-full text-display font-display text-default-font">
                Kick Start Your Vibe Coding Projects
              </span>
              <Button
                variant="neutral-primary"
                onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
              >
                Submit to vibe starter
              </Button>
            </div>
            <Select
              disabled={false}
              error={false}
              label=""
              placeholder="Sort"
              helpText=""
              icon={null}
              value={undefined}
              onValueChange={(value: string) => {}}
            >
              <Select.Item value="Popular">Popular</Select.Item>
              <Select.Item value="Latest">Latest</Select.Item>
              <Select.Item value="Featured">Featured</Select.Item>
              <Select.Item value="Name A-Z">Name A-Z</Select.Item>
              <Select.Item value="Name Z-A">Name Z-A</Select.Item>
            </Select>
          </div>
          <div className="grid w-full grid-cols-3 gap-4">
            <StarterCard
              image="https://res.cloudinary.com/subframe/image/upload/v1744289393/uploads/8775/y5ijy4brcjyzygxrpper.png"
              title="Firebase studio"
              subtext="Meet Firebase Studio: A cloud-based, agentic dev environment powered by Gemini."
              snippet1="npx shadcn@latest add https://supabase.com/ui/r/supabase-client-nextjs.json"
              snippet2="pnpm dlx shadcn@latest add https://supabase.com/ui/r/supabase-client-nextjs.json"
              snippet3="yarn dlx shadcn@latest add https://supabase.com/ui/r/supabase-client-nextjs.json"
              snippet4="bunx --bun shadcn@latest add https://supabase.com/ui/r/supabase-client-nextjs.json"
              icon={<FeatherCopy />}
              featured={true}
              codeBadges={
                <>
                  <div className="flex h-20 w-full flex-none items-start gap-2 rounded-md border border-solid border-neutral-100 bg-neutral-50 px-2 py-2 shadow-sm">
                    <span className="line-clamp-1 grow shrink-0 basis-0 self-stretch text-monospace-body font-monospace-body text-subtext-color">
                      // https://firebase.studio
                    </span>
                    <FeatherCopy className="font-['Inter'] text-[16px] font-[600] leading-[16px] text-neutral-400" />
                  </div>
                  <div className="flex w-full items-start gap-1">
                    <Badge variant="neutral">Text-to-app</Badge>
                    <Badge variant="neutral">Gemini</Badge>
                  </div>
                </>
              }
              badgeIcon={
                <>
                  <Badge>Featured</Badge>
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
            <StarterCard
              image="https://res.cloudinary.com/subframe/image/upload/v1744288880/uploads/8775/fl1rjda1gt1f2fle26yv.svg"
              title="Supabase client libraries"
              subtext="Supabase client for Next.js"
              snippet1="npx shadcn@latest add https://supabase.com/ui/r/supabase-client-nextjs.json"
              snippet2="pnpm dlx shadcn@latest add https://supabase.com/ui/r/supabase-client-nextjs.json"
              snippet3="yarn dlx shadcn@latest add https://supabase.com/ui/r/supabase-client-nextjs.json"
              snippet4="bunx --bun shadcn@latest add https://supabase.com/ui/r/supabase-client-nextjs.json"
              icon={<FeatherCopy />}
              featured={true}
              codeBadges={
                <>
                  <div className="flex h-20 w-full flex-none items-start gap-2 rounded-md border border-solid border-neutral-100 bg-neutral-50 px-2 py-2 shadow-sm">
                    <span className="line-clamp-1 grow shrink-0 basis-0 self-stretch text-monospace-body font-monospace-body text-subtext-color">
                      npx shadcn@latest add https://supabase.com/ui/r/supabase-client-nextjs.json
                    </span>
                    <FeatherCopy className="font-['Inter'] text-[16px] font-[600] leading-[16px] text-neutral-400" />
                  </div>
                  <div className="flex w-full items-start gap-1">
                    <Badge variant="neutral">Component</Badge>
                    <Badge variant="neutral">React</Badge>
                    <Badge variant="neutral">Next.js</Badge>
                  </div>
                </>
              }
              badgeIcon={
                <>
                  <Badge>Featured</Badge>
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
            <StarterCard
              image="https://res.cloudinary.com/subframe/image/upload/v1744288880/uploads/8775/fl1rjda1gt1f2fle26yv.svg"
              title="Supabase password based auth"
              subtext="Password-based authentication block for Next.js"
              snippet1="npx shadcn@latest add https://supabase.com/ui/r/password-based-auth-nextjs.json"
              snippet2="pnpm dlx shadcn@latest add https://supabase.com/ui/r/password-based-auth-nextjs.json"
              snippet3="yarn dlx shadcn@latest add https://supabase.com/ui/r/password-based-auth-nextjs.json"
              snippet4="bunx --bun shadcn@latest add https://supabase.com/ui/r/password-based-auth-nextjs.json"
              icon={<FeatherCopy />}
              featured={true}
              codeBadges={
                <>
                  <div className="flex h-20 w-full flex-none items-start gap-2 rounded-md border border-solid border-neutral-100 bg-neutral-50 px-2 py-2 shadow-sm">
                    <span className="line-clamp-1 grow shrink-0 basis-0 self-stretch text-monospace-body font-monospace-body text-subtext-color">
                      npx shadcn@latest add https://supabase.com/ui/r/supabase-client-nextjs.json
                    </span>
                    <FeatherCopy className="font-['Inter'] text-[16px] font-[600] leading-[16px] text-neutral-400" />
                  </div>
                  <div className="flex w-full items-start gap-1">
                    <Badge variant="neutral">Component</Badge>
                    <Badge variant="neutral">React</Badge>
                    <Badge variant="neutral">Next.js</Badge>
                  </div>
                </>
              }
              badgeIcon={
                <>
                  <Badge>Featured</Badge>
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
            <StarterCard
              image="https://res.cloudinary.com/subframe/image/upload/v1744288880/uploads/8775/fl1rjda1gt1f2fle26yv.svg"
              title="Supabase dropzone (file upload)"
              subtext="Displays a control for easier uploading of files directly to Supabase Storage"
              snippet1="npx shadcn@latest add https://supabase.com/ui/r/dropzone-nextjs.json"
              snippet2="pnpm dlx shadcn@latest add https://supabase.com/ui/r/dropzone-nextjs.json"
              snippet3="yarn dlx shadcn@latest add https://supabase.com/ui/r/dropzone-nextjs.json"
              snippet4="bunx --bun shadcn@latest add https://supabase.com/ui/r/dropzone-nextjs.json"
              icon={<FeatherCopy />}
              codeBadges={
                <>
                  <div className="flex h-20 w-full flex-none items-start gap-2 rounded-md border border-solid border-neutral-100 bg-neutral-50 px-2 py-2 shadow-sm">
                    <span className="line-clamp-1 grow shrink-0 basis-0 self-stretch text-monospace-body font-monospace-body text-subtext-color">
                      npx shadcn@latest add https://supabase.com/ui/r/supabase-client-nextjs.json
                    </span>
                    <FeatherCopy className="font-['Inter'] text-[16px] font-[600] leading-[16px] text-neutral-400" />
                  </div>
                  <div className="flex w-full items-start gap-1">
                    <Badge variant="neutral">Component</Badge>
                    <Badge variant="neutral">React</Badge>
                    <Badge variant="neutral">Next.js</Badge>
                  </div>
                </>
              }
              badgeIcon={
                <>
                  <Badge className="hidden">Featured</Badge>
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
            <StarterCard
              image="https://res.cloudinary.com/subframe/image/upload/v1744293408/uploads/8775/sstvdf7affl3rtvb5gyc.svg"
              title="Next.js starter project"
              subtext="Create a Next.js app"
              snippet1="// Automatic installation"
              snippet2="npx create-next-app@latest"
              snippet3="// Manual installation"
              snippet4="npm install next@latest react@latest react-dom@latest"
              icon={<FeatherCopy />}
              codeBadges={
                <>
                  <div className="flex h-20 w-full flex-none items-start gap-2 rounded-md border border-solid border-neutral-100 bg-neutral-50 px-2 py-2 shadow-sm">
                    <span className="line-clamp-1 grow shrink-0 basis-0 self-stretch text-monospace-body font-monospace-body text-subtext-color">
                      // Automatic installation
                    </span>
                    <FeatherCopy className="font-['Inter'] text-[16px] font-[600] leading-[16px] text-neutral-400" />
                  </div>
                  <div className="flex w-full items-start gap-1">
                    <Badge variant="neutral">React</Badge>
                    <Badge variant="neutral">Next.js</Badge>
                  </div>
                </>
              }
              badgeIcon={
                <>
                  <Badge className="hidden">Featured</Badge>
                  <IconButton
                    disabled={false}
                    variant="neutral-secondary"
                    size="small"
                    icon={<FeatherGithub />}
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
            <StarterCard
              image="https://res.cloudinary.com/subframe/image/upload/v1744288880/uploads/8775/fl1rjda1gt1f2fle26yv.svg"
              title="Supabase realtime cursor"
              subtext="Real-time cursor sharing for collaborative applications"
              snippet1="npx shadcn@latest add https://supabase.com/ui/r/realtime-cursor-nextjs.json"
              snippet2="pnpm dlx shadcn@latest add https://supabase.com/ui/r/realtime-cursor-nextjs.json"
              snippet3="yarn dlx shadcn@latest add https://supabase.com/ui/r/realtime-cursor-nextjs.json"
              snippet4="bunx --bun shadcn@latest add https://supabase.com/ui/r/realtime-cursor-nextjs.json"
              icon={<FeatherCopy />}
              codeBadges={
                <>
                  <div className="flex h-20 w-full flex-none items-start gap-2 rounded-md border border-solid border-neutral-100 bg-neutral-50 px-2 py-2 shadow-sm">
                    <span className="line-clamp-1 grow shrink-0 basis-0 self-stretch text-monospace-body font-monospace-body text-subtext-color">
                      npx shadcn@latest add https://supabase.com/ui/r/supabase-client-nextjs.json
                    </span>
                    <FeatherCopy className="font-['Inter'] text-[16px] font-[600] leading-[16px] text-neutral-400" />
                  </div>
                  <div className="flex w-full items-start gap-1">
                    <Badge variant="neutral">Component</Badge>
                    <Badge variant="neutral">React</Badge>
                    <Badge variant="neutral">Next.js</Badge>
                  </div>
                </>
              }
              badgeIcon={
                <>
                  <Badge className="hidden">Featured</Badge>
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
            <StarterCard
              image="https://res.cloudinary.com/subframe/image/upload/v1744288880/uploads/8775/fl1rjda1gt1f2fle26yv.svg"
              title="Supabase current user avatar"
              subtext="Supabase Auth-aware avatar"
              snippet1="npx shadcn@latest add https://supabase.com/ui/r/current-user-avatar-nextjs.json"
              snippet2="pnpm dlx shadcn@latest add https://supabase.com/ui/r/current-user-avatar-nextjs.json"
              snippet3="yarn dlx shadcn@latest add https://supabase.com/ui/r/current-user-avatar-nextjs.json"
              snippet4="bunx --bun shadcn@latest add https://supabase.com/ui/r/current-user-avatar-nextjs.json"
              icon={<FeatherCopy />}
              codeBadges={
                <>
                  <div className="flex h-20 w-full flex-none items-start gap-2 rounded-md border border-solid border-neutral-100 bg-neutral-50 px-2 py-2 shadow-sm">
                    <span className="line-clamp-1 grow shrink-0 basis-0 self-stretch text-monospace-body font-monospace-body text-subtext-color">
                      npx shadcn@latest add https://supabase.com/ui/r/supabase-client-nextjs.json
                    </span>
                    <FeatherCopy className="font-['Inter'] text-[16px] font-[600] leading-[16px] text-neutral-400" />
                  </div>
                  <div className="flex w-full items-start gap-1">
                    <Badge variant="neutral">Component</Badge>
                    <Badge variant="neutral">React</Badge>
                    <Badge variant="neutral">Next.js</Badge>
                  </div>
                </>
              }
              badgeIcon={
                <>
                  <Badge className="hidden">Featured</Badge>
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
            <StarterCard
              image="https://res.cloudinary.com/subframe/image/upload/v1744299440/uploads/8775/bt4naqfmjbfbkac9qeom.png"
              title="AI chatbot"
              subtext="Meet Firebase Studio: A cloud-based, agentic dev environment powered by Gemini."
              snippet1="npx shadcn@latest add https://supabase.com/ui/r/supabase-client-nextjs.json"
              snippet2="pnpm dlx shadcn@latest add https://supabase.com/ui/r/supabase-client-nextjs.json"
              snippet3="yarn dlx shadcn@latest add https://supabase.com/ui/r/supabase-client-nextjs.json"
              snippet4="bunx --bun shadcn@latest add https://supabase.com/ui/r/supabase-client-nextjs.json"
              icon={<FeatherCopy />}
              codeBadges={
                <>
                  <div className="flex h-20 w-full flex-none items-start gap-2 rounded-md border border-solid border-neutral-100 bg-neutral-50 px-2 py-2 shadow-sm">
                    <span className="line-clamp-1 h-4 grow shrink-0 basis-0 text-monospace-body font-monospace-body text-subtext-color">
                      gh repo clone vercel/ai-chatbot
                    </span>
                    <FeatherCopy className="font-['Inter'] text-[16px] font-[600] leading-[16px] text-neutral-400" />
                  </div>
                  <div className="flex w-full items-start gap-1">
                    <Badge variant="neutral">Text-to-app</Badge>
                    <Badge variant="neutral">Gemini</Badge>
                  </div>
                </>
              }
              badgeIcon={
                <>
                  <Badge className="hidden">Featured</Badge>
                  <IconButton
                    disabled={false}
                    variant="neutral-secondary"
                    size="small"
                    icon={<FeatherGithub />}
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
            <StarterCard
              image="https://res.cloudinary.com/subframe/image/upload/v1744288880/uploads/8775/fl1rjda1gt1f2fle26yv.svg"
              title="Supabase realtime avatar stack"
              subtext="Avatar stack in realtime"
              snippet1="npx shadcn@latest add https://supabase.com/ui/r/realtime-avatar-stack-nextjs.json"
              snippet2="pnpm dlx shadcn@latest add https://supabase.com/ui/r/realtime-avatar-stack-nextjs.json"
              snippet3="yarn dlx shadcn@latest add https://supabase.com/ui/r/realtime-avatar-stack-nextjs.json"
              snippet4="bunx --bun shadcn@latest add https://supabase.com/ui/r/realtime-avatar-stack-nextjs.json"
              icon={<FeatherCopy />}
              codeBadges={
                <>
                  <div className="flex h-20 w-full flex-none items-start gap-2 rounded-md border border-solid border-neutral-100 bg-neutral-50 px-2 py-2 shadow-sm">
                    <span className="line-clamp-1 h-4 grow shrink-0 basis-0 text-monospace-body font-monospace-body text-subtext-color">
                      npx shadcn@latest add https://supabase.com/ui/r/supabase-client-nextjs.json
                    </span>
                    <FeatherCopy className="font-['Inter'] text-[16px] font-[600] leading-[16px] text-neutral-400" />
                  </div>
                  <div className="flex w-full items-start gap-1">
                    <Badge variant="neutral">Component</Badge>
                    <Badge variant="neutral">React</Badge>
                    <Badge variant="neutral">Next.js</Badge>
                  </div>
                </>
              }
              badgeIcon={
                <>
                  <Badge className="hidden">Featured</Badge>
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
            <StarterCard
              image="https://res.cloudinary.com/subframe/image/upload/v1744288880/uploads/8775/fl1rjda1gt1f2fle26yv.svg"
              title="Supabase realtime chat"
              subtext="Real-time chat component for collaborative applications"
              snippet1="npx shadcn@latest add https://supabase.com/ui/r/realtime-chat-nextjs.json"
              snippet2="pnpm dlx shadcn@latest add https://supabase.com/ui/r/realtime-chat-nextjs.json"
              snippet3="yarn dlx shadcn@latest add https://supabase.com/ui/r/realtime-chat-nextjs.json"
              snippet4="bunx --bun shadcn@latest add https://supabase.com/ui/r/realtime-chat-nextjs.json"
              icon={<FeatherCopy />}
              codeBadges={
                <>
                  <div className="flex h-20 w-full flex-none items-start gap-2 rounded-md border border-solid border-neutral-100 bg-neutral-50 px-2 py-2 shadow-sm">
                    <span className="line-clamp-1 grow shrink-0 basis-0 self-stretch text-monospace-body font-monospace-body text-subtext-color">
                      npx shadcn@latest add https://supabase.com/ui/r/supabase-client-nextjs.json
                    </span>
                    <FeatherCopy className="font-['Inter'] text-[16px] font-[600] leading-[16px] text-neutral-400" />
                  </div>
                  <div className="flex w-full items-start gap-1">
                    <Badge variant="neutral">Component</Badge>
                    <Badge variant="neutral">React</Badge>
                    <Badge variant="neutral">Next.js</Badge>
                  </div>
                </>
              }
              badgeIcon={
                <>
                  <Badge className="hidden">Featured</Badge>
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
            <StarterCard
              image="https://res.cloudinary.com/subframe/image/upload/v1744288880/uploads/8775/fl1rjda1gt1f2fle26yv.svg"
              title="Supabase prompt rules"
              subtext="Rules for AI Code Editors for Supabase"
              snippet1="npx shadcn@latest add https://supabase.com/ui/r/ai-editor-rules.json"
              snippet2="pnpm dlx shadcn@latest add https://supabase.com/ui/r/ai-editor-rules.json"
              snippet3="yarn dlx shadcn@latest add https://supabase.com/ui/r/ai-editor-rules.json"
              snippet4="bunx --bun shadcn@latest add https://supabase.com/ui/r/ai-editor-rules.json"
              icon={<FeatherCopy />}
              codeBadges={
                <>
                  <div className="flex h-20 w-full flex-none items-start gap-2 rounded-md border border-solid border-neutral-100 bg-neutral-50 px-2 py-2 shadow-sm">
                    <span className="line-clamp-1 grow shrink-0 basis-0 self-stretch text-monospace-body font-monospace-body text-subtext-color">
                      npx shadcn@latest add https://supabase.com/ui/r/ai-editor-rules.json
                    </span>
                    <FeatherCopy className="font-['Inter'] text-[16px] font-[600] leading-[16px] text-neutral-400" />
                  </div>
                  <div className="flex w-full items-start gap-1">
                    <Badge variant="neutral">Component</Badge>
                    <Badge variant="neutral">React</Badge>
                    <Badge variant="neutral">Next.js</Badge>
                  </div>
                </>
              }
              badgeIcon={
                <>
                  <Badge className="hidden">Featured</Badge>
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
          </div>
        </div>
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
            onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
          >
            Reset filters
          </Button>
        </div>
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
    </DefaultPageLayout>
  );
}

export default Home;
