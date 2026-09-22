---
layout: page
permalink: /personal/
title: personal
description: A visual journal of life beyond research.
nav: true
nav_order: 5
---

<p class="page-lede">
  Beyond papers and simulations, I value the people who make science collaborative,
  time spent caring for animals, discovering new places, and sitting down over a chessboard.
  This is a small, evolving visual journal of that life.
</p>

<nav class="personal-jump" aria-label="Personal gallery sections">
  <a href="#research-groups">Research groups</a>
  <a href="#animal-care">Animal care</a>
  <a href="#chess">Chess</a>
</nav>

<section class="personal-section" id="research-groups">
  <div class="personal-section__heading">
    <span>01</span>
    <div>
      <h2>Research groups</h2>
      <p>The communities that shaped different chapters of my journey through Padova, Rochester, and Illinois.</p>
    </div>
  </div>

  <div class="personal-grid personal-grid--groups">
    <figure class="personal-photo personal-photo--wide">
      <img
        src="{{ '/assets/img/personal/group-helvi-witek-wide.webp' | relative_url }}"
        alt="Jay with members of Prof. Helvi Witek’s Gravity Group outside a brick building at Illinois"
        width="1600"
        height="800"
        loading="lazy"
        decoding="async"
        data-zoomable
      >
      <figcaption>Prof. Helvi Witek’s group · UIUC</figcaption>
    </figure>

    <figure class="personal-photo personal-photo--wide">
      <img
        src="{{ '/assets/img/personal/group-manuela-campanelli-wide.webp' | relative_url }}"
        alt="Jay with members of Prof. Manuela Campanelli’s research group in a meeting room at RIT"
        width="1600"
        height="800"
        loading="lazy"
        decoding="async"
        data-zoomable
      >
      <figcaption>Prof. Manuela Campanelli’s group · RIT</figcaption>
    </figure>

    <figure class="personal-photo personal-photo--wide">
      <img
        src="{{ '/assets/img/personal/group-riccardo-ciolfi-wide.webp' | relative_url }}"
        alt="Jay with members of Dr. Riccardo Ciolfi’s research group in a square in Padova"
        width="1600"
        height="800"
        loading="lazy"
        decoding="async"
        data-zoomable
      >
      <figcaption>Dr. Riccardo Ciolfi’s group · Padova</figcaption>
    </figure>
  </div>
</section>

<section class="personal-section" id="animal-care">
  <div class="personal-section__heading">
    <span>02</span>
    <div>
      <h2>Animal care</h2>
      <p>Companionship, patience, and the small everyday rituals of looking after animals.</p>
    </div>
  </div>

  <div class="personal-story">
    <span class="media-kicker">Care in practice</span>
    <h3>Time with animals keeps me grounded.</h3>
    <p>From October 2023 through July 2025, I volunteered two to three hours each week with Rochester Animal Services. The work made patience, trust, and the quiet routines of care an important part of life beyond research.</p>
    <div class="personal-story__meta" aria-label="Animal-care volunteering details">
      <span>Rochester, New York</span>
      <span>2023–2025</span>
    </div>
  </div>

  {% assign animal_photos = site.data.personal_gallery | where: "category", "animal-care" %}
  <div class="personal-grid personal-grid--portraits">
    {% for photo in animal_photos %}
    <figure class="personal-photo">
      <img
        src="{{ photo.src | relative_url }}"
        alt="{{ photo.alt }}"
        loading="lazy"
        decoding="async"
        data-zoomable
      >
      <figcaption>{{ photo.caption }}</figcaption>
    </figure>
    {% endfor %}
  </div>
</section>

<section class="personal-section" id="chess">
  <div class="personal-section__heading">
    <span>03</span>
    <div>
      <h2>Chess</h2>
      <p>Positions, games, and over-the-board moments worth returning to.</p>
    </div>
  </div>

  <div class="chess-note">
    <div class="chess-note__board" aria-hidden="true"><i class="fas fa-chess-board"></i></div>
    <div>
      <span class="media-kicker">Chess.com · dumbledore27</span>
      <h3>A good game is always welcome.</h3>
      <p>Find me online for a game or follow my latest matches.</p>
      <a class="site-button site-button--primary chess-profile-link" href="https://www.chess.com/member/dumbledore27" target="_blank" rel="noopener noreferrer">Let’s play on Chess.com <span aria-hidden="true">↗</span></a>
    </div>
  </div>

  {% assign chess_photos = site.data.personal_gallery | where: "category", "chess" %}
  {% if chess_photos.size > 0 %}
  <div class="personal-grid chess-gallery">
    {% for photo in chess_photos %}
    <figure class="personal-photo{% if photo.featured %} personal-photo--wide{% endif %}">
      <img
        src="{{ photo.src | relative_url }}"
        alt="{{ photo.alt }}"
        loading="lazy"
        decoding="async"
        data-zoomable
      >
      <figcaption>{{ photo.caption }}</figcaption>
    </figure>
    {% endfor %}
  </div>
  {% endif %}
</section>
