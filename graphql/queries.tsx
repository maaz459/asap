import { gql } from "@apollo/client";

export const aboutUsData = gql`
  query {
    aboutus {
      data {
        id
        attributes {
          heading {
            id
            preHeading
            underlineHeading
            postHeading
          }
          text
          isVideo
          videoLink
          objective {
            id
            objectiveText
          }
          banner {
            id
            text {
              id
              content
              template
              textcolor
              bold
            }
            image {
              data {
                id
                attributes {
                  url
                }
              }
            }
            heading {
              id
              preHeading
              underlineHeading
              postHeading
            }
          }
          engineers {
            id
            image {
              data {
                attributes {
                  url
                }
              }
            }
            name
            designation
          }
        }
      }
    }
  }
`;

export const homeData = gql`
  query {
    home {
      data {
        attributes {
          banner {
            text
            image {
              data {
                attributes {
                  url
                }
              }
            }
            button {
              buttonText
              buttonColor
              buttonLink
            }
            heading
          }
          weDoHeading
          functionalities {
            heading
            text
            type
          }
          supportHeading
          supportText
          supportButton {
            buttonText
            buttonColor
            buttonLink
          }
          clientStoriesText
          clientStories {
            bgImage {
              data {
                attributes {
                  url
                }
              }
            }
            logoImage {
              data {
                attributes {
                  url
                }
              }
            }
            technologyName
            title
            buttonText
          }
          reviewText
          reviews {
            reviewBy
            reviewText
            stars
            reviewerJobTitle
          }
          awardsText
          awards {
            image {
              data {
                attributes {
                  url
                }
              }
            }
          }
          contactText
          contactTitle
          contact {
            name
            email
            phone
            tellMore
            submitText
          }
        }
      }
    }
  }
`;

export const navbar = gql`
  query {
    navbar {
      data {
        attributes {
          logo {
            data {
              attributes {
                url
              }
            }
          }
          logo2 {
            data {
              attributes {
                url
              }
            }
          }
          link {
            linkText
            isButton
            linkAddress
          }
          icons {
            icon
            iconLink
          }
        }
      }
    }
  }
`;

export const service = gql`
  query {
    service {
      data {
        attributes {
          banner {
            quoteText
            quoteIcon{
              data{
                attributes{
                  url
                }
              }
            }
            quoteBy
            image {
              data {
                attributes {
                  url
                }
              }
            }
          }
          belowBannerHeading {
            preHeading
            underlineHeading
            postHeading
          }
          skills {
            heading
            text {
              content
              template
              bold
              textcolor
            }
            linkText
            isLink
            image {
              data {
                attributes {
                  url
                }
              }
            }
          }
          stepsHeading {
            preHeading
            underlineHeading
            postHeading
          }
          steps {
            heading
            image {
              data {
                attributes {
                  url
                }
              }
            }
            hoverColor
            text {
              content
              template
              bold
              textcolor
            }
          }
          technologiesText
          technologies {
            image {
              data {
                attributes {
                  url
                }
              }
            }
          }
        }
      }
    }
  }
`;

export const footer = gql`
  query {
    footer {
      data {
        attributes {
          addressText
          address {
            content
            template
            bold
            textcolor
          }
          address2 {
            content
            template
            bold
            textcolor
          }
          companyText
          links {
            linkText
            linkAddress
          }
        }
      }
    }
  }
`;

export const blogs = gql`
  query {
    blogs {
      data {
        id
        attributes {
          thumbnail {
            data {
              attributes {
                url
              }
            }
          }
          date
          title
          bloggerName
          category
          slug
          excerpt
        }
      }
    }
  }
`;

export const works = gql`
  query {
    work {
      data {
        attributes {
          heading {
            preHeading
            underlineHeading
            postHeading
          }
          button {
            buttonText
            buttonColor
            buttonLink
          }
          works(pagination: { limit: 50 }) {
            bgImage {
              data {
                attributes {
                  url
                }
              }
            }
            logoImage {
              data {
                attributes {
                  url
                }
              }
            }
            upperImage {
              data {
                attributes {
                  url
                }
              }
            }
            title
            technologyName
            buttonText
          }
        }
      }
    }
  }
`;

export const contactUs = gql`
  query {
    contactus {
      data {
        attributes {
          heading {
            preHeading
            underlineHeading
            postHeading
          }
          text
          contactForm {
            name
            email
            phone
            tellMore
            submitText
          }
        }
      }
    }
  }
`;

export const blogById = gql`
  query ($id: ID) {
    blog(id: $id) {
      data {
        attributes {
          thumbnail {
            data {
              attributes {
                url
              }
            }
          }
          date
          title
          bloggerName
          category
          slug
          excerpt
          content {
            __typename
            ... on ComponentBlogsHeading {
              preHeading
              coloredHeading
              postHeading
              fontSize
              color
              marginTop
            }
            __typename
            ... on ComponentBlogsText {
              preText
              coloredText
              postText
              fontSize
              color
              marginTop
            }
            __typename
            ... on ComponentBlogsImage {
              marginTop
              image {
                data {
                  attributes {
                    url
                  }
                }
              }
            }
            __typename
            ... on ComponentBlogsVideo {
              marginTop
              video {
                data {
                  attributes {
                    url
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`;
