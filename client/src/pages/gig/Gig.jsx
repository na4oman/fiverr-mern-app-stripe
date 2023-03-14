import { Slider } from 'infinite-react-carousel/lib'
import React from 'react'
import './Gig.scss'

const Gig = () => {
  return (
    <div className='gig'>
      <div className='container'>
        <div className='left'>
          <span className='breadcrumbs'>
            Liverr &rsaquo; Graphics & Design &rsaquo;
          </span>
          <h1>
            I will use midjourney to create stunning ai generated art, ai art
          </h1>
          <div className='seller-overview'>
            <img
              src='https://fiverr-res.cloudinary.com/t_profile_thumb,q_auto,f_auto/profile/photos/1597754/original/36721_1327895957682_51544_n.jpg'
              alt=''
              className='user-image'
            />
            <span className='username'>John Doe</span>
            <div className='stars'>
              <img src='/public/img/star.png' alt='' />
              <img src='/public/img/star.png' alt='' />
              <img src='/public/img/star.png' alt='' />
              <img src='/public/img/star.png' alt='' />
              <img src='/public/img/star.png' alt='' />
              <span className='star'>5</span>
              <span className='votes'>(54)</span>
            </div>
          </div>
          <Slider slidesToShow={1} arrowsScroll={1} className='slider'>
            <img
              src='https://images.pexels.com/photos/1074535/pexels-photo-1074535.jpeg?auto=compress&cs=tinysrgb&w=1600'
              alt=''
            />
            <img
              src='https://images.pexels.com/photos/1462935/pexels-photo-1462935.jpeg?auto=compress&cs=tinysrgb&w=1600'
              alt=''
            />
            <img
              src='https://images.pexels.com/photos/1054777/pexels-photo-1054777.jpeg?auto=compress&cs=tinysrgb&w=1600'
              alt=''
            />
          </Slider>
          <h2>About This Gig</h2>
          <p>
            Hi, my name is Valentina, I am an AI digital artist and I will
            create images for you using Artificial Intelligence softwares.
            Programs like Midjourney needs a lot of work to give satisfing
            results, that's why you need me: I know how to use the software.
          </p>
          <p>
            According to this gig, I will create a design for you. It can be a
            portrait or half body picture of a fictional character, without
            specific background, or a fictional item, book cover, music cover,
            greeting card or background. It's not a{' '}
            <i>"turn myself into something else"</i> service.
          </p>
          <p>
            Communication is very important. I will need you to work with me,
            giving me ideas, or detailed descriptions, to make the best! During
            the process, you will get several concepts (see tier) to choose
            which one will be yours! I will do my best to give you all the
            samples in time,{' '}
            <b>but if you disappear without picking one, you agree that</b> - to
            respect the delivery time -{' '}
            <b>
              I will pick one of them and delivery it as final. So, don't
              disappear ;-)
            </b>
          </p>
          <div className='seller'>
            <h2>About The Seller</h2>
            <div className='seller-card'>
              <div className='seller-info'>
                <img
                  src='https://fiverr-res.cloudinary.com/t_profile_thumb,q_auto,f_auto/profile/photos/1597754/original/36721_1327895957682_51544_n.jpg'
                  alt=''
                />
                <div className='info'>
                  <span className='user'>John Doe</span>
                  <div className='stars'>
                    <img src='/public/img/star.png' alt='' />
                    <img src='/public/img/star.png' alt='' />
                    <img src='/public/img/star.png' alt='' />
                    <img src='/public/img/star.png' alt='' />
                    <img src='/public/img/star.png' alt='' />
                    <span>4.9</span>
                    <span>(54)</span>
                  </div>
                  <button>Contact Me</button>
                </div>
              </div>
              <div className='box'>
                <div className='item'>
                  <span className='title'>From</span>
                  <span className='desc'>USA</span>
                </div>
                <div className='item'>
                  <span className='title'>Member since</span>
                  <span className='desc'>Aug 2022</span>
                </div>
                <div className='item'>
                  <span className='title'>Avg. response time</span>
                  <span className='desc'>4 hours</span>
                </div>
                <div className='item'>
                  <span className='title'>Last delivery</span>
                  <span className='desc'>1 day</span>
                </div>
                <div className='item'>
                  <span className='title'>Languages</span>
                  <span className='desc'>English</span>
                </div>
                <hr />
                <p>Hi! I'm Valentina,</p>
                <p>
                  I enjoy creating AI generated art in my spare time. I have a
                  lot of experience using the AI program and that means I know
                  what to prompt the AI with to get a great and incredibly
                  detailed result.
                </p>
              </div>
            </div>
          </div>
          <div className='reviews'>
            <h2>Reviews</h2>
            <div className='item'>
              <div className='user'>
                <img
                  src='https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_small/v1/attachments/profile/photo/8505c617cc5954a8e5b786b75421c4cb-1600375643932/0e88379e-354c-4d96-bb50-f58db85a982f.png'
                  alt=''
                />
                <div className='info'>
                  <span className='user-info'>John Doe</span>
                  <div className='country'>
                    <img
                      src='https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1fa-1f1f8.png'
                      alt=''
                    />
                    <span>United States</span>
                  </div>
                </div>
              </div>
              <div className='stars'>
                <img src='/img/star.png' alt='' />
                <img src='/img/star.png' alt='' />
                <img src='/img/star.png' alt='' />
                <img src='/img/star.png' alt='' />
                <img src='/img/star.png' alt='' />
                <span>5</span>
                <span> | 3 weeks ago</span>
              </div>
              <p>
                The designer took my photo for my book cover to the next level!
                Professionalism and ease of working with designer along with
                punctuality is above industry standards!! Whatever your project
                is, you need this designer!
              </p>
              <div className='helpful'>
                <span>Helpful?</span>
                <img src='/img/like.png' alt='' />
                <span>Yes</span>
                <img src='/img/dislike.png' alt='' />
                <span>No</span>
              </div>
            </div>
            <hr />
            <div className='item'>
              <div className='user'>
                <img
                  src='https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_small/v1/attachments/profile/photo/8505c617cc5954a8e5b786b75421c4cb-1600375643932/0e88379e-354c-4d96-bb50-f58db85a982f.png'
                  alt=''
                />
                <div className='info'>
                  <span>John Doe</span>
                  <div className='country'>
                    <img
                      src='https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1fa-1f1f8.png'
                      alt=''
                    />
                    <span>United States</span>
                  </div>
                </div>
              </div>
              <div className='stars'>
                <img src='/img/star.png' alt='' />
                <img src='/img/star.png' alt='' />
                <img src='/img/star.png' alt='' />
                <img src='/img/star.png' alt='' />
                <img src='/img/star.png' alt='' />
                <span>5</span>
                <span> | 3 weeks ago</span>
              </div>
              <p>
                The designer took my photo for my book cover to the next level!
                Professionalism and ease of working with designer along with
                punctuality is above industry standards!! Whatever your project
                is, you need this designer!
              </p>
              <div className='helpful'>
                <span>Helpful?</span>
                <img src='/img/like.png' alt='' />
                <span>Yes</span>
                <img src='/img/dislike.png' alt='' />
                <span>No</span>
              </div>
            </div>
            <hr />
            <div className='item'>
              <div className='user'>
                <img
                  src='https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_small/v1/attachments/profile/photo/8505c617cc5954a8e5b786b75421c4cb-1600375643932/0e88379e-354c-4d96-bb50-f58db85a982f.png'
                  alt=''
                />
                <div className='info'>
                  <span>John Doe</span>
                  <div className='country'>
                    <img
                      src='https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1fa-1f1f8.png'
                      alt=''
                    />
                    <span>United States</span>
                  </div>
                </div>
              </div>
              <div className='stars'>
                <img src='/img/star.png' alt='' />
                <img src='/img/star.png' alt='' />
                <img src='/img/star.png' alt='' />
                <img src='/img/star.png' alt='' />
                <img src='/img/star.png' alt='' />
                <span>5</span>
                <span> | 3 weeks ago</span>
              </div>
              <p>
                The designer took my photo for my book cover to the next level!
                Professionalism and ease of working with designer along with
                punctuality is above industry standards!! Whatever your project
                is, you need this designer!
              </p>
              <div className='helpful'>
                <span>Helpful?</span>
                <img src='/img/like.png' alt='' />
                <span>Yes</span>
                <img src='/img/dislike.png' alt='' />
                <span>No</span>
              </div>
            </div>
          </div>
        </div>
        <div className='right'>
          <div className='wrapper'>
            <div className='header'>
              <h3>1 AI Generated Image</h3>
              <span>$ 59.99</span>
            </div>
            <p>
              8 variants + 1 final image 1 character only no photo edition Size:
              2048X2048pixels Commercial use
            </p>
            <div className='info'>
              <div className='item'>
                <img src='/img/clock.png' alt='' />
                <span>1 Day Delivery</span>
              </div>
              <div className='item'>
                <img src='/img/recycle.png' alt='' />
                <span>Unlimited Revisions</span>
              </div>
            </div>
            <ul className='gig-features'>
              <li>
                <img src='/img/greencheck.png' alt='' />
                <span>Prompt writing</span>
              </li>
              <li>
                <img src='/img/greencheck.png' alt='' />
                <span>Prompt delivery</span>
              </li>
              <li>
                <img src='/img/greencheck.png' alt='' />
                <span>Artwork delivery</span>
              </li>
              <li>
                <img src='/img/greencheck.png' alt='' />
                <span>Image upscaling</span>
              </li>
            </ul>
            <button>Continue</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Gig
