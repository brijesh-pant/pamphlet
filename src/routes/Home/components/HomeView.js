import React from 'react'
import { IndexLink, Link } from 'react-router'

import './HomeView.scss'

export const HomeView = () => (
  <div>
    {' '}
    <h1>React Redux Starter Kit</h1>
    <IndexLink to='/' activeClassName='page-layout__nav-item--active'>
      Home
    </IndexLink>
    {' · '}
    <Link to='/counter' activeClassName='page-layout__nav-item--active'>
      Counter
    </Link>
    <div id='main-wrapper-menu'>
      <div id='wrapper-cross' />
      <div id='wrapper-menu'>
        <div className='recent-post text-part-menutab'>
          <ul>
            <li>
              <div id='recent-post-title'>Our recent post</div>
            </li>
            <li>
              <div id='recent-post-1'>
                <a href='spore-post1.html'>Post a youtube video</a>
              </div>
            </li>
            <li>
              <div id='recent-post-2'>
                <a href='spore-post2.html'>Post an animated image</a>
              </div>
            </li>
            <li>
              <div id='recent-post-3'>
                <a href='spore-post5.html'>Post featured image</a>
              </div>
            </li>
            <li>
              <div id='recent-post-4'>
                <a href='spore-post3.html'>Auto-resized image</a>
              </div>
            </li>
          </ul>
        </div>

        <div className='category-post text-part-menutab'>
          <div id='line-category-post' />
          <ul>
            <li>
              <div id='category-post-title'>Categories post</div>
            </li>
            <li>
              <div id='category-post-1'>
                <a href='spore-cat-video.html'>Video articles</a>
              </div>
            </li>
            <li>
              <div id='category-post-2'>
                <a href='spore-cat-hotpost.html'>Hot articles</a>
              </div>
            </li>
            <li>
              <div id='category-post-3'>
                <a href='spore-cat-image.html'>Images</a>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
)

export default HomeView
