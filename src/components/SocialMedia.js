import React from 'react';
import { Icon } from '@iconify/react';

import '../styles/components/socialMedia.scss';

export default function SocialMedia() {
  return (
    <section className="social-media">
      <a
        href="https://www.linkedin.com/in/valmyr-tavares-6920822a/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Icon icon="akar-icons:linkedin-fill" />
      </a>
      <a
        href="https://github.com/ValmyrTavares"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Icon icon="bi:github" />
      </a>
    </section>
  );
}
