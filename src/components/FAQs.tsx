import { Disclosure } from "@headlessui/react";

const faqs = [
  {
    question: "What is Persona?",
    answer:
      "Persona is a tool that allows you to create custom Notion-style avatars for your social media profiles. You can customize the hair, eyes, mouth, head, outfit, body, accessories, and facial hair of your avatar.",
  },
  {
    question: "What is a Notion Avatar?",
    answer:
      "A Notion avatar is a custom image that you can use to represent yourself on social media. You can use Persona to create a custom Notion-style avatar for your socials.",
  },
  {
    question: "Is Persona free?",
    answer:
      "Yes, Persona is free to use. You can create and download your custom Notion-style avatar without paying anything.",
  },
  {
    question: "Can I use Persona to create avatars for my projects?",
    answer:
      "Yes, you can use Persona to create Notion-style avatars for your personal and commercial projects. There are no restrictions on how you can use the avatars you create. Remember to credit Drawkit for the artwork.",
  },


];
export const FAQs = () => {
  return (
    <div className="w-full px-4 py-6">
      <div className="mx-auto w-full max-w-xl rounded-2xl bg-white p-2">
        <h2 className="text-2xl font-bold pb-3">FAQs</h2>
        {faqs.map((faq, index) => (
          <Disclosure key={index} defaultOpen>
            <Disclosure.Button className="flex w-full justify-between rounded-lg px-4 py-2 text-left text-sm font-medium text-black focus:outline-none focus-visible:ring focus-visible:ring-gray-500/75">
              <span>{faq.question}</span>
            </Disclosure.Button>
            <Disclosure.Panel className="px-4 pb-2 pt-4 text-sm text-left text-gray-500">
              {faq.answer}
            </Disclosure.Panel>
          </Disclosure>
        ))}
      </div>
    </div>
  );
};
