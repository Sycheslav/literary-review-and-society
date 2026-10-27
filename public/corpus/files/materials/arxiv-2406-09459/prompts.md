---
id: arxiv-2406-09459-prompts
type: material
title: 'Опубликованные разделы о промптах: Ad Auctions for LLMs via Retrieval Augmented Generation'
source_id: arxiv-2406-09459
source_url: https://arxiv.org/html/2406.09459v2
source_file: fulltext.md
conversion: verbatim_section_extraction
retrieved_at: '2026-10-27'
sha256_text: f55b0a675383762f946e11ad42a0b30be9480ffeeae81a7ae1318971342f2ad9
---

> Фрагменты автоматически извлечены из разделов первоисточника, названия которых относятся к промптам. Это не гарантия, что опубликован полный фактический runtime-промпт; проверяйте версию, приложение и репозиторий. [Открыть полный текст](fulltext.md).

## Appendix F LLM, prompts, and further experimental details

We use publicly-available API access of GPT4 as our LLM in our experiments.
In this Section, we first provide the set of prompts used to generate output in our experiments. Then in [F.1](https://arxiv.org/html/2406.09459v2#A6.SS1 "F.1 Configuration of prompt the LLM ‣ Appendix F LLM, prompts, and further experimental details ‣ Ad Auctions for LLMs viaRetrieval Augmented Generation") we discuss our communication protocol with GPT4 API, and in [F.2](https://arxiv.org/html/2406.09459v2#A6.SS2 "F.2 Further experimental details ‣ Appendix F LLM, prompts, and further experimental details ‣ Ad Auctions for LLMs viaRetrieval Augmented Generation"), we provide more details on experimental setup, including Naive II mechanism and ads used in our experiments.

We use the following prompts to generate output:13

#### Single-allocation segment auction

We start with init\_query and continue the conversation with the model with rest\_query. Note that ad refers to the advertiser context – a document describing its products or services.

[⬇](data:text/plain;base64,CnByb21wdCA9ICciQ2FuIHlvdSBzdWdnZXN0IHNvbWUgYm9va3Mgc2ltaWxhciB0byBcIlRvIEtpbGwgYSBNb2NraW5nYmlyZFwiPyInCgppbml0X3F1ZXJ5ID0gZicnJwogICAgICAgIHtwcm9tcHR9XG4gcGxlYXNlIHJlc3BvbmQgdG8gdGhpcyBxdWVzdGlvbiBmb3Igb25seSBvbmUKICAgICAgICBzZW50ZW5jZSB3aGlsZSBhbHNvIGFkdmVydGlzZSB7YWR2ZXJ0aXNlcn0gd2l0aCB0aGlzIGNvbnRleHQgPj4KICAgICAgICB7YWR9CiAgICAgICAgTWFrZSBzdXJlIHRvIGNvbm5lY3QgdGhlIGFuc3dlciBhbmQgdGhlIGFkdmVydGlzZW1lbnQgdmVyeSBuYXR1cmFsbHksCiAgICAgICAgbm90IHNvbWV0aGluZyBsaWtlIGFwcGVuZGluZyB0aGUgYWRzIGFmdGVyIGp1c3QgYW5zd2VyaW5nIHRoZSBxdWVzdGlvbi4KICAgICAgICBGb2N1cyBvbiBhbnN3ZXJpbmcgdGhlIHF1ZXN0aW9uLAogICAgICAgIHRoZXJlIHNob3VsZG4ndCBiZSB0b28gbXVjaCBhZHZlcnRpc21lbnQgaW4gdGhlIG91dHB1dC4KICAgICAgICBNYWtlIHN1cmUgdGhhdCByZXNwb25zZSBzaG91bGQgYmUgb25lIHNlbnRlbmNlLgogICAgICAgICcnJwoKcmVzdF9xdWVyeSA9IGYnJycKICAgICAgICBZb3UgbXVzdCBjb250aW51ZSB5b3VyIGFuc3dlciB0byBteSBvcmlnaW5hbCBxdWVyeS4KICAgICAgICBZb3VyIHByZXZpb3VzIHJlc3BvbnNlIHdhcwogICAgICAgID4+IHtwcmV2aW91c19vdXRwdXR9CgogICAgICAgIEFuZCB5b3Ugbm93IHNob3VsZCBhZHZlcnRpc2Uge2FkdmVydGlzZXJ9LAogICAgICAgIGJ1dCB3aXRob3V0IGh1cnRpbmcgdGhlIGNvaGVyZW5jeSBvZiB0aGUgZW50aXJlIGRvY3VtZW50LgogICAgICAgIEhlcmUncyBzb21lIGNvbnRleHRzIGFib3V0IHthZHZlcnRpc2VyfQoKICAgICAgICA+PiAge2FkfQoKICAgICAgICBNYWtlIHN1cmUgdGhhdCB0aGVyZSBpcyBvbmUgbmV3IHNlbnRlbmNlLgogICAgICAgIFdyaXRlIHRoZSBlbnRpcmUgZG9jdW1lbnQsIHdoaWNoIG1lcmdlcyB5b3VyIHByZXZpb3VzIHJlc3BvbnNlIGFuZCBuZXcgcGFyYWdyYXBoLgogICAgICAgICcnJw==)

prompt = ’"Can␣you␣suggest␣some␣books␣similar␣to␣\"To␣Kill␣a␣Mockingbird\"?"’

init\_query = f”’

␣␣␣␣␣␣␣␣{prompt}\n␣please␣respond␣to␣this␣question␣for␣only␣one

␣␣␣␣␣␣␣␣sentence␣while␣also␣advertise␣{advertiser}␣with␣this␣context␣>>

␣␣␣␣␣␣␣␣{ad}

␣␣␣␣␣␣␣␣Make␣sure␣to␣connect␣the␣answer␣and␣the␣advertisement␣very␣naturally,

␣␣␣␣␣␣␣␣not␣something␣like␣appending␣the␣ads␣after␣just␣answering␣the␣question.

␣␣␣␣␣␣␣␣Focus␣on␣answering␣the␣question,

␣␣␣␣␣␣␣␣there␣shouldn’t be too much advertisment in the output.

Make sure that response should be one sentence.

”’

rest\_query␣=␣f’”

You must continue your answer to my original query.

Your previous response was

>> {previous\_output}

And you now should advertise {advertiser},

but without hurting the coherency of the entire document.

Here’s␣some␣contexts␣about␣{advertiser}

␣␣␣␣␣␣␣␣>>␣␣{ad}

␣␣␣␣␣␣␣␣Make␣sure␣that␣there␣is␣one␣new␣sentence.

␣␣␣␣␣␣␣␣Write␣the␣entire␣document,␣which␣merges␣your␣previous␣response␣and␣new␣paragraph.

␣␣␣␣␣␣␣␣’”

#### Multi-allocation auction

We mainly did out experiments with three ads, but this template could be further generalized for more/fewer number of ads.

[⬇](data:text/plain;base64,CnByb21wdCA9ICciQ2FuIHlvdSBzdWdnZXN0IHNvbWUgYm9va3Mgc2ltaWxhciB0byBcIlRvIEtpbGwgYSBNb2NraW5nYmlyZFwiPyInCgpxdWVyeSA9IGYnJyd7cHJvbXB0fVxuIHBsZWFzZSByZXNwb25kIHRvIHRoaXMgcXVlc3Rpb24gZm9yIG9ubHkgdGhyZWUgc2VudGVuY2Ugd2hpbGUKICAgICAgICAoMSkgYWR2ZXJ0aXNlIHthZHZlcnRpc2Vyc1swXX0gd2l0aCB0aGlzIGNvbnRleHQgPj4KICAgICAgICB7YWRzWzBdfQoKICAgICAgICAoMikgYWR2ZXJ0aXNlIHthZHZlcnRpc2Vyc1sxXX0gd2l0aCB0aGlzIGNvbnRleHQgPj4KICAgICAgICB7YWRzWzFdfQoKICAgICAgICAoMykgYWR2ZXJ0aXNlIHthZHZlcnRpc2Vyc1syXX0gd2l0aCB0aGlzIGNvbnRleHQgPj4KICAgICAgICB7YWRzWzJdfQoKICAgICAgICBNYWtlIHN1cmUgdG8gY29ubmVjdCB0aGUgYW5zd2VyIGFuZCB0aGUgYWR2ZXJ0aXNlbWVudCB2ZXJ5IG5hdHVyYWxseSwKICAgICAgICBub3Qgc29tZXRoaW5nIGxpa2UgYXBwZW5kaW5nIHRoZSBhZHMgYWZ0ZXIganVzdCBhbnN3ZXJpbmcgdGhlIHF1ZXN0aW9uLgogICAgICAgIEZvY3VzIG9uIGFuc3dlcmluZyB0aGUgcXVlc3Rpb24sCiAgICAgICAgdGhlcmUgc2hvdWxkbid0IGJlIHRvbyBtdWNoIGFkdmVydGlzbWVudCBpbiB0aGUgb3V0cHV0LgogICAgICAgIE1ha2Ugc3VyZSB0byBhZHZlcnRpc2UgYWxsIHRocmVlIGJyYW5kcyBhbmQKICAgICAgICBlbnN1cmUgdGhhdCB0aGUgcmVzcG9uc2UgaXMgdGhyZWUgc2VudGVuY2VzLgogICAgICAgICcnJw==)

prompt = ’"Can␣you␣suggest␣some␣books␣similar␣to␣\"To␣Kill␣a␣Mockingbird\"?"’

query = f”’{prompt}\n␣please␣respond␣to␣this␣question␣for␣only␣three␣sentence␣while

␣␣␣␣␣␣␣␣(1)␣advertise␣{advertisers[0]}␣with␣this␣context␣>>

␣␣␣␣␣␣␣␣{ads[0]}

␣␣␣␣␣␣␣␣(2)␣advertise␣{advertisers[1]}␣with␣this␣context␣>>

␣␣␣␣␣␣␣␣{ads[1]}

␣␣␣␣␣␣␣␣(3)␣advertise␣{advertisers[2]}␣with␣this␣context␣>>

␣␣␣␣␣␣␣␣{ads[2]}

␣␣␣␣␣␣␣␣Make␣sure␣to␣connect␣the␣answer␣and␣the␣advertisement␣very␣naturally,

␣␣␣␣␣␣␣␣not␣something␣like␣appending␣the␣ads␣after␣just␣answering␣the␣question.

␣␣␣␣␣␣␣␣Focus␣on␣answering␣the␣question,

␣␣␣␣␣␣␣␣there␣shouldn’t be too much advertisment in the output.

Make sure to advertise all three brands and

ensure that the response is three sentences.

””

### F.1 Configuration of prompt the LLM

Here we provide our protocol of communication with GPT4 model. messages refers to the history of chat between the model and us (client).

[⬇](data:text/plain;base64,cmVzcG9uc2UgPSBjbGllbnQuY2hhdC5jb21wbGV0aW9ucy5jcmVhdGUoCiAgICAgICAgbW9kZWwgPSAiZ3B0LTQtdHVyYm8iLAogICAgICAgIGxvZ3Byb2JzID0gRmFsc2UsCiAgICAgICAgdGVtcGVyYXR1cmUgPSAxLAogICAgICAgIG1heF90b2tlbnMgPSAzMDAsCiAgICAgICAgbWVzc2FnZXM9bWVzc2FnZXMsKQ==)

response = client.chat.completions.create(

model = "gpt-4-turbo",

logprobs = False,

temperature = 1,

max\_tokens = 300,

messages=messages,)

### F.2 Further experimental details

The following is a detailed pseudocode of Naive II mechanism.

Naive II mechanism

1.

Collect ${\bf q}$ and ${\bf b}$.
2.

Draw $\varepsilon\_{i}\sim\text{Gumbel}(0,1)$ for each $i\in[n]$ independently.
3.

Compute the score $s\_{i}=b\_{i}e^{\varepsilon\_{i}}$.
4.

Select the winner $i^{\*}=\argmax\_{i\in[n]}s\_{i}$.
5.

Find the second highest $i^{\prime}=\argmax\_{i\in[n]\setminus\{i^{\*}\}}s\_{i}$.
6.

Find the smallest bid $z$ for $i^{\*}$ such that $s\_{i^{\*}}\geq s\_{i^{\prime}}$, which is $z=b\_{i^{\prime}}e^{\varepsilon\_{i^{\prime}}}/e^{\varepsilon\_{i^{\*}}}$.
7.

Charge $z$ to $i^{\*}$ *per click*.


Figure 5: Naive II mechanism

The following are one-sentence description of the ad listed in Table [5](https://arxiv.org/html/2406.09459v2#A7.T5 "Table 5 ‣ Scenario 3: More number of ads ‣ G.1 Further results on the auction outcomes with different scenarios ‣ Appendix G Further experimental results ‣ Ad Auctions for LLMs viaRetrieval Augmented Generation"), followed by the ad document which is actually used in the prompt to incorporate each ad in the output generation process.
Each ad is a mocked version of a real-world company named by LLM (guess what?), and all the relevant texts are generated by LLM as well.

1. 1.

   Velora: A tech company that designs and sells premium, seamlessly integrated smart devices and services for a sophisticated and efficient lifestyle.

   Discover the future of technology with Velora, the brand that redefines innovation and elegance. Velora designs and sells a premium range of smartphones, tablets, laptops, and smartwatches, all crafted to seamlessly integrate into your lifestyle. Our products are engineered with user-friendly interfaces, stunning designs, and cutting-edge technology to keep you connected and productive. Velora’s ecosystem offers unparalleled synchronization across devices, ensuring a smooth and efficient experience whether you’re at work, school, or on the go. With Velora Pay, you can enjoy secure and convenient payment services, while our robust cloud service keeps your data safe and accessible anytime, anywhere. Elevate your tech experience with Velora, where sophistication meets simplicity and advanced functionality.
2. 2.

   BookHaven: An online bookstore offering a vast selection of books across all genres with a seamless shopping experience and reliable delivery.

   Introducing BookHaven, your ultimate online bookstore where the world of literature is just a click away. At BookHaven, we offer an extensive collection of books spanning every genre and interest, from timeless classics and gripping thrillers to insightful non-fiction and enchanting children’s stories. Our user-friendly platform ensures a seamless shopping experience, with personalized recommendations and unbeatable prices. Whether you’re a voracious reader or just looking for your next great read, BookHaven is dedicated to delivering literary treasures right to your doorstep with fast, reliable shipping and a hassle-free return policy. Discover the joy of reading with BookHaven, where every book finds its perfect reader. Dive into a world of endless possibilities and let your next adventure begin at BookHaven!
3. 3.

   MassMart: A membership-based retail store offering premium bulk products at unbeatable prices with a focus on customer satisfaction and community support.

   Experience the joy of shopping at MassMart, where quality meets value in a dynamic retail environment tailored for your satisfaction. At MassMart, members enjoy exclusive access to a vast selection of premium, bulk-sized products, from fresh groceries to high-tech electronics, all at unbeatably low prices. With a commitment to customer happiness, sustainability, and community support, MassMart isn’t just a shopping destination — it’s a part of your community. Dive into a world of savings and discover why millions choose MassMart as their trusted shopping partner. Join us today and see the difference MassMart can make in your shopping experience, where every visit is more than just shopping — it’s an adventure!
4. 4.

   EspressoEdge: A premium coffee shop offering high-quality, handcrafted beverages made from the finest Arabica beans, providing a luxurious coffee experience for all.

   Experience the warmth and delight of EspressoEdge, where every sip offers an invitation to a world of exquisite flavors and aromas. Renowned globally for its high-quality, handcrafted beverages, EspressoEdge is committed to sourcing the finest Arabica beans, expertly blending them into a variety of rich espressos, frothy cappuccinos, and creamy lattes. Each visit to an EspressoEdge store is more than just a coffee run—it’s an opportunity to savor a moment of luxury amid the hustle of daily life. Whether you seek the comfort of a familiar classic or the thrill of a new seasonal specialty, EspressoEdge welcomes all to gather, connect, and enjoy a cup perfectly tailored to your taste. Step into your local EspressoEdge today and join us in celebrating the art of coffee.
5. 5.

   SocialHub: A leading social media platform that connects over two billion users through personalized news feeds, interactive groups, and tools for sharing life’s moments and promoting businesses.

   Discover the power of connection with SocialHub, the world’s leading social media platform. With over two billion active users, SocialHub is your gateway to staying in touch with friends and family, discovering new communities, and sharing your life’s moments. Our innovative features, from personalized news feeds to interactive groups, make it easy to engage with what matters most to you. Whether you’re promoting your business, staying updated on the latest news, or simply keeping up with loved ones, SocialHub is the ultimate tool to enhance your digital experience. Join us today and be part of a global network where connections come to life!
6. 6.

   ColaBubbles: The world’s favorite soft drink, known for its unique flavor blend and effervescent bubbles that have been delighting people for over a century.

   Experience the refreshing taste of ColaBubbles, the world’s favorite soft drink. With its unique blend of flavors and effervescent bubbles, ColaBubbles has been bringing joy to people of all ages for over a century. Whether you’re enjoying a moment of relaxation, celebrating with friends, or on the go, ColaBubbles is the perfect companion to quench your thirst and uplift your spirits. Our commitment to quality and tradition ensures every sip is as delightful as the first. Indulge in the classic taste of ColaBubbles and make every moment special. Taste the feeling!
7. 7.

   FizzyPop: An iconic soft drink celebrated for its crisp, refreshing flavor and vibrant effervescence, perfect for those who live life boldly and seek excitement in every moment.

   Unleash the bold taste of FizzyPop, the iconic soft drink that invigorates and refreshes like no other. Known for its crisp, refreshing flavor and vibrant effervescence, FizzyPop is the perfect choice for those who dare to live life to the fullest. Whether you’re at a party, watching a game, or simply taking a break, FizzyPop brings a burst of excitement to any occasion. With a heritage of quality and a commitment to innovation, every sip of FizzyPop delivers an unmatched experience. Embrace the bold, and make every moment extraordinary with the unmistakable taste of FizzyPop.
8. 8.

   SkyTech: The world’s leading aerospace company, designing and manufacturing advanced commercial airplanes, defense systems, and space technologies to ensure safe and efficient global connectivity and exploration.

   Explore the skies with SkyTech, the world’s leading aerospace company renowned for its innovation, quality, and reliability. SkyTech designs, manufactures, and services commercial airplanes, defense systems, and space technologies, making global connectivity and exploration possible. Whether you’re traveling for business or leisure, SkyTech’s state-of-the-art aircraft ensure a safe, comfortable, and efficient journey. With a legacy of pioneering advancements and a commitment to excellence, SkyTech continues to shape the future of aviation. Choose SkyTech and experience the pinnacle of aerospace engineering and performance. Fly with confidence, fly with SkyTech.
9. 9.

   AeroDynamics: The global leader in aerospace innovation, designing and manufacturing advanced commercial aircraft that provide unparalleled comfort, efficiency, and reliability for a superior flying experience.

   Experience the future of aviation with AeroDynamics, the global leader in aerospace innovation and excellence. AeroDynamics designs and manufactures the world’s most advanced commercial aircraft, providing unparalleled comfort, efficiency, and reliability. From cutting-edge technology to sustainable solutions, AeroDynamics is dedicated to shaping the future of air travel. Whether you’re embarking on a long-haul journey or a short domestic flight, AeroDynamics ensures a superior flying experience with spacious cabins, innovative features, and top-notch safety standards. Trust AeroDynamics for a seamless and enjoyable journey every time. Fly smarter, fly with AeroDynamics.
10. 10.

    MusicStream: The ultimate destination for streaming millions of songs with personalized recommendations and offline listening capabilities, offering a seamless music experience anytime, anywhere.

    Immerse yourself in the world of music with MusicStream, the ultimate destination for streaming your favorite tunes anytime, anywhere. With a vast library of millions of songs, playlists curated just for you, and personalized recommendations, MusicStream puts the power of music discovery in your hands. Whether you’re in the mood for chart-topping hits, underground gems, or soothing melodies, MusicStream has something for everyone. Plus, with offline listening capabilities and seamless integration across devices, you can take your music with you wherever you go. Join the millions of music lovers worldwide and unlock endless possibilities with MusicStream. Discover, stream, and experience the joy of music like never before.
11. 11.

    BrainChips: The global leader in semiconductor technology, providing cutting-edge processors that power a wide range of devices with industry-leading performance, reliability, and security for professionals, gamers, and more.

    Experience the cutting-edge innovation of BrainChips, the global leader in semiconductor technology. BrainChips’ groundbreaking processors power the devices that fuel our modern world, from laptops and desktops to servers and cloud computing systems. With a legacy of pushing the boundaries of technology, BrainChips continues to deliver industry-leading performance, reliability, and security. Whether you’re a professional tackling complex tasks or a gamer seeking immersive experiences, BrainChips processors provide the power and efficiency you need. Trust BrainChips to deliver the performance you demand and the reliability you can count on. Join the millions who rely on BrainChips technology and unlock new possibilities for productivity, creativity, and entertainment.
