import { Image } from "../atoms/Image";
import logo from "../../assets/logo.png";
import { Text } from "../atoms/Text";
import { FooterTexts } from "../particles/DataLists";
import { List } from "../atoms/List";
import { Link } from "react-router-dom";
// import {
//   FacebookLogo,
//   InstagramLogo,
//   WhatsappLogo,
//   LinkedinLogo,
// } from "@phosphor-icons/react";
// import app from "../../assets/leather.png"

const Footer = () => {
  const date = new Date();
  return (
    <footer className="w-full flex flex-col">
      <section className="w-full h-auto grid lg:grid-cols-3 md:grid-cols-3 lg:px-20 md:px-12 px-6 py-16 gap-7 md:gap-4 lg:gap-0">
        <div className="flex flex-col items-start gap-3">
          <Image className="w-28" image={logo} alt="Logo" as="a" href="/" />
          <Text className="text-sm text-color3" as="p">
            {FooterTexts.underLogoText}
          </Text>
        </div>

        <div className="flex flex-col md:items-center gap-4 md:mt-8">
          <Text className="text-xl text-color3" as="h2">
            {FooterTexts.quickLinks.caption}
          </Text>
          <ul className="flex flex-col items-center gap-2">
            {FooterTexts.quickLinks.links.map((link, index) => (
              <List key={index} className="text-sm text-color3">
                <Link
                  to={link.url}
                  className="text-color3 transition-all duration-300 hover:underline"
                >
                  {link.name}
                </Link>
              </List>
            ))}
          </ul>
        </div>

        {/* <div className="flex flex-col md:items-center gap-4 md:mt-8">
                    <Text className="text-xl text-color3" as="h2">
                        {FooterTexts.contacts.caption}
                    </Text>
                    <ul className="flex flex-col md:ml-12 gap-2">
                        {
                            FooterTexts.contacts.links.map((link, index) => (
                                <List key={index} className="text-sm">
                                    <Link to={link.url} className="text-color4 transition-all duration-300 hover:underline">{link.name}</Link>
                                </List>
                            ))
                        }
                    </ul>
                </div> */}

        {/* <div className="flex flex-col lg:items-center gap-4 md:mt-8">
                    <Text className="text-xl text-color3" as="h2">
                        {FooterTexts.more.caption}
                    </Text>
                    <ul className="flex flex-col gap-2 lg:ml-10">
                        {
                            FooterTexts.more.links.map((link, index) => (
                                <List key={index} className="text-sm">
                                    <Link to={link.url} className="text-color4 transition-all duration-300 hover:underline">{link.name}</Link>
                                </List>
                            ))
                        }
                    </ul>
                </div> */}

        {/* <div className="flex flex-col lg:items-center w-full md:mt-8 gap-4">
          <ul className="w-full flex items-center lg:justify-center gap-4">
            <List>
              <Link
                to={`https://www.facebook.com/profile.php?id=100091079467768`}
                target="_blank"
                className="text-color3 border-[1px] border-color3/50 p-2.5 flex rounded-full transition-all duration-300 ease-in hover:bg-gradient-to-tr from-color1 to-color2 hover:text-white"
              >
                <FacebookLogo size={15} color="currentColor" weight="fill" />
              </Link>
            </List>
            <List>
              <Link
                to={`https://www.instagram.com/whiteskinleather/`}
                target="_blank"
                className="text-color3 border-[1px] border-color3/50 p-2.5 flex rounded-full transition-all duration-300 ease-in hover:bg-gradient-to-tr from-color1 to-color2 hover:text-white"
              >
                <InstagramLogo size={15} color="currentColor" weight="fill" />
              </Link>
            </List>
            <List>
              <Link
                to={`https://wa.me/923351261286`}
                target="_blank"
                className="text-color3 border-[1px] border-color3/50 p-2.5 flex rounded-full transition-all duration-300 ease-in hover:bg-gradient-to-tr from-color1 to-color2 hover:text-white"
              >
                <WhatsappLogo size={15} color="currentColor" weight="fill" />
              </Link>
            </List>
            <List>
              <Link
                to={`https://www.linkedin.com/in/white-skin-leather-0b7764282/?originalSubdomain=pk`}
                target="_blank"
                className="text-color3 border-[1px] border-color3/50 p-2.5 flex rounded-full transition-all duration-300 ease-in hover:bg-gradient-to-tr from-color1 to-color2 hover:text-white"
              >
                <LinkedinLogo size={15} color="currentColor" weight="fill" />
              </Link>
            </List>
          </ul>
          <Text as="p" className="text-base font-light text-color4">
                        Discover Our App
                    </Text>
                    <Image image={app} className="w-28" alt="App Download" as="a" href="/" />
        </div> */}
        <div className="flex flex-col items-start gap-4">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3620.987865136969!2d67.11968860000002!3d24.830088599999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33b0024669bab%3A0x5f992ba1140957fe!2sLuxuryLeather!5e0!3m2!1sen!2sus!4v1714058410465!5m2!1sen!2sus"
            width="300"
            height="300"
            style={{ border: "0" }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>
      <Text className="text-center bg-color4 text-white text-xs py-6 font-light">
        Copyright {date.getFullYear()}. All rights reserved.
      </Text>
    </footer>
  );
};

export default Footer;
