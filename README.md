# SHRUB - *S*upport *H*elper *R*esponsive *U*tility *B*ot

**SHRUB** is a customer service bot that interacts with a customer to help them navigate questions they may have about a product or service. She is intended to take strain off human technical support personnel to leave them to work on more complicated issues while she serves customers with answers to frequently asked questions. In this demo, the bot first verifies the customer's service number, and then the bot is configured to answer low-level technical support questions by referencing an FAQ.

**Live Demo**
https://shrub.netlify.com

SHRUB is built using the [IBM Watson API](https://www.ibm.com/watson/developer/), with React, Node.js, Express, and MongoDB.

This project is currently in development. Backend is located at https://github.com/tardisdriver/cust-support-ai-chat-BE.

**Architecture**
![image 6](/readme_images/image_6.png)

**User Wireframes and User Flow**

User wireframes can be viewed [here](https://drive.google.com/file/d/119yKc73mihUTkiaeRdPuSG9xF2mJkhXa/view?usp=sharing).

User flows can be viewed [here](https://drive.google.com/file/d/1gpQ21AvhDZ0avmy_nlYUi20LZjIOm_Kv/view?usp=sharing).

**MVP Stories**
As a customer:  
 -I want the bot to validate my account as quickly as possible so that I can get my question answered fast.  
 -I want to chat with the bot in a way that I am accustomed to, like within an instant/direct message or SMS, so that I feel comfortable using the bot. -I want to be able to get the answer I need as quickly as possible so that I don't have to wade through FAQs on my own.

**Verifing Your Service Number**
In this demo, a service number is used to identify the user's account, but any identifiable marker could be used in its place.

First, click the "Click Here" button on the landing page:
![image 1](/readme_images/image_1.png)

Then enter your service number and press the submit button:
![image 2](/readme_images/image_2.png)

Note that for demo purposes, you will use the number 654ZYX.

**Chatting With Shrub**
As far as cold hard facts go, SHRUB only knows what she has access to in the FAQ documents loaded into Watson Discovery. However, she is able to respond to some customer service issues as well. Right now, she can respond if someone just says "help", if the answer isn't what the customer was looking for, and can even handle an irate (or impish) customer swearing.

SHRUB feels like a typical text/messaging interface so it should be intuitive to the majority of users how to interact with her. Simply ask your question in the field and submit.

![image 3](/readme_images/image_3.png)

In some of these events, SHRUB would hand off the handling of the customer to a human counterpart, however that functionality doesn't exist in the demo since the company SHRUB is "working" for doesn't exist! SHRUB will notify you in chat when this hand-off would occur.

![image 4](/readme_images/image_4.png)

SHRUB responds to these events using Watson Conversation, and as such, she's still being trained and learning how to handle some situations. As such, you may get an odd response or two.

![image 5](/readme_images/image_5.png)

Rest assured that her training is still an ongoing process and any anomalies you find will be corrected, as the Conversation interface allows tracking of the conversations for training purposes.
