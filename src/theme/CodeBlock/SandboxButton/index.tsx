/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, {useCallback, useState, useRef, useEffect} from 'react';
import clsx from 'clsx';
// @ts-expect-error: TODO, we need to make theme-classic have type: module
import copy from 'copy-text-to-clipboard';
import {translate} from '@docusaurus/Translate';
import type {Props} from '@theme/CodeBlock/CopyButton';

import styles from './styles.module.css';

export default function SandboxButton({code, className}: Props): JSX.Element {
  const openInNewTab = () => {
    // generate a random name
    const randomName = "docs-" + Math.random().toString(36).substring(7);
    const params = "?name=" + randomName + "&code=" + encodeURIComponent(code);
    let domain = "https://try.feldera.com/create/";
    if (process.env.NODE_ENV === 'development') {
      domain = "http://localhost:8080/create/";
    }
    const newWindow = window.open(domain + params, '_blank', 'noopener,noreferrer');
    if (newWindow) newWindow.opener = null;
  };

  return (
    <button
      type="button"
      aria-label={
         translate({
              id: 'theme.CodeBlock.SandboxButtonAriaLabel',
              message: 'Run code in the Feldera Online Sandbox',
              description: 'The ARIA label for run in sandbox code blocks button',
         })
      }
      title={translate({
        id: 'theme.CodeBlock.copy',
        message: 'Run',
        description: 'The run button label on code blocks',
      })}
      className={clsx(
        'clean-btn',
        className,
        styles.SandboxButton,
      )}
      onClick={openInNewTab} >
      Run
    </button>
  );
}
