"use client";
/*
 * Documentation:
 * Starter card — https://app.subframe.com/e11df886f842/library?component=Starter+card_83be3955-1aaf-4b82-8b9a-f286e7fe21bc
 * Badge — https://app.subframe.com/e11df886f842/library?component=Badge_97bdb082-1124-4dd7-a335-b14b822d0157
 * Icon Button — https://app.subframe.com/e11df886f842/library?component=Icon+Button_af9405b1-8c54-4e01-9786-5aad308224f6
 */

import React from "react";
import * as SubframeUtils from "../utils";
import * as SubframeCore from "@subframe/core";
import { FeatherCopy } from "@subframe/core";

interface StarterCardRootProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "title"> {
  image?: string;
  title?: React.ReactNode;
  subtext?: React.ReactNode;
  snippet1?: React.ReactNode;
  snippet2?: React.ReactNode;
  snippet3?: React.ReactNode;
  snippet4?: React.ReactNode;
  icon?: React.ReactNode;
  featured?: boolean;
  codeBadges?: React.ReactNode;
  badgeIcon?: React.ReactNode;
  className?: string;
}

const StarterCardRoot = React.forwardRef<HTMLElement, StarterCardRootProps>(
  function StarterCardRoot(
    {
      image,
      title,
      subtext,
      snippet1,
      snippet2,
      snippet3,
      snippet4,
      icon = <FeatherCopy />,
      featured = false,
      codeBadges,
      badgeIcon,
      className,
      ...otherProps
    }: StarterCardRootProps,
    ref
  ) {
    return (
      <div
        className={SubframeUtils.twClassNames(
          "group/83be3955 flex w-full flex-col items-start gap-4 rounded-lg border border-solid border-neutral-100 bg-default-background px-6 py-6 shadow-sm",
          className
        )}
        ref={ref as any}
        {...otherProps}
      >
        <div className="flex w-full flex-col items-start gap-4">
          <div className="flex w-full items-center gap-4">
            {image ? (
              <img className="h-6 w-6 flex-none object-cover" src={image} />
            ) : null}
            {badgeIcon ? (
              <div
                className={SubframeUtils.twClassNames(
                  "flex grow shrink-0 basis-0 items-center justify-end gap-2",
                  { "flex-row flex-nowrap gap-2": featured }
                )}
              >
                {badgeIcon}
              </div>
            ) : null}
          </div>
          <div className="flex w-full flex-col items-center gap-2">
            {title ? (
              <span className="line-clamp-1 w-full text-heading-3 font-heading-3 text-default-font">
                {title}
              </span>
            ) : null}
            {subtext ? (
              <span className="line-clamp-1 h-4 w-full flex-none text-caption font-caption text-subtext-color">
                {subtext}
              </span>
            ) : null}
          </div>
        </div>
        {codeBadges ? (
          <div className="flex w-full flex-col items-start gap-4">
            {codeBadges}
          </div>
        ) : null}
      </div>
    );
  }
);

export const StarterCard = StarterCardRoot;
