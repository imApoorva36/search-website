import React from "react";
import HeroSection from "../HeroSection";
import GallerySection from '../index/gallery/gallery'
import EventSection from "../index/events/events";
import ContactSection from "../index/contact/contact";
import ParallaxSection from '../index/parallax/parallax'
// //import TimelineSection from '../index/timeline/timeline'
import image2 from '../../images/event.JPG'
import image1 from '../../images/event2.jpg'
import image3 from '../../images/event3.jpeg'

const eventsData = [
    {
      title: "Dedication",
      description: "Dedication of SEARCH to Society",
      learnMoreLink: "/events/dedication",
      image: image1,
    },
    {
      title: "DiRTS 2023",
      description: "A 3-Day Disaster Resilience Workshop",
      learnMoreLink: "https://search.nitk.ac.in",
      image: image2, 
    },
    {
      title: "Coastal Police 2023",
      description: "A Hands-on Session",
      learnMoreLink: "/events/coastalpolice",
      image: image3, 
    },
  ];


const Home = () => {
    return (
        <>
            <HeroSection />
            {/* <TimelineSection /> */}
            <ParallaxSection />
            <EventSection events={eventsData} />
            <GallerySection />
            <ContactSection />
        </>
    );
};

export default Home;
