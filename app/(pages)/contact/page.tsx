import { ContactForm } from "@/components/contact";
import { metaConfig } from "@/config";
import { constructOgImageUri, getUrl } from "@/lib/utils";
import { Metadata } from "next";
import { v4 } from "uuid";

export const metadata: Metadata = {
  title: "Contact",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: `${getUrl()}/contact`,
    title: metaConfig.title,
    description: metaConfig.description,
    siteName: metaConfig.title,
    images: [
      {
        url: constructOgImageUri(
          metaConfig.ogTitle,
          "Contact",
          metaConfig.tags,
          "/contact",
        ),
        width: 1200,
        height: 630,
        alt: metaConfig.title,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: metaConfig.ogTitle,
    description: metaConfig.description,
    images: [
      constructOgImageUri(
        metaConfig.ogTitle,
        "Contact",
        metaConfig.tags,
        "/contact",
      ),
    ],
    creator: metaConfig.author.twitterAddress,
  },
};

const ContactPage = () => {
  return (
    <>
      <div className="mx-auto max-w-5xl">
        <div className="relative mx-auto max-w-4xl px-6 py-4">
          <ContactForm />
        </div>
      </div>
    </>
  );
};

export default ContactPage;
