import type { NextPage } from "next";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Project - Huu Quy Portfolio",
  description: "Thông tin về tôi",
};
const Blog: NextPage = () => {
  return (
    <>
      <section className="blog section" id="blog">
        <div className="container">
          <div className="row">
            <div className="section-title padd-15">
              <h2>Personal Projects</h2>
            </div>
          </div>
          <div className="row">
            {/* Blog Item 1 */}
            <div className="blog-item padd-15">
              <div className="blog-item-inner shadow-dark">
                <div className="blog-img">
                  <div className="blog-date">June 4, 2020</div>
                </div>
                <div className="blog-info">
                  <h4 className="blog-title">
                    Chatbot Aplication
                  </h4>
                  <p title=" A chatbot that allows users to switch between different AI models, 
                   such as GPT-4 or GPT-3, during the conversation to experience how each model responds." className="blog-description">
                   A chatbot that allows users to switch between different AI models, 
                   such as GPT-4 or GPT-3, during the conversation to experience how each model responds.

                  </p>
                  <h3>Features</h3>
                    <ul className="blog-features">
                      <li>Developed a user authentication and authorization system with role-based access control.</li>
                      <li>Enabled users to register, log in, and choose AI models for interaction.</li>
                      <li>Integrated real-time chat system with dynamic response rendering.</li>
                      <li>Implemented a visual representation of the model thinking process while generating responses.</li>
                      <li>Managed access token and refresh token for secure session handling.</li>
                      <li>Integrated Momo payment gateway for VIP subscription and upgrade.</li>
                      <li>Fine-tuned the MathCoder model using custom datasets for domain-specizc tasks.</li>
                      <li>Deployed custom model to Ollama, allowing the admin to download and manage it remotely.</li>
                    </ul>
                  <p className="blog-tags">
                    Technology: <a href="#">ReactJs</a>, <a href="#">SpringBoot</a>, 
                    <a href="#"> JWT</a>, <a href="#">Ollama</a>, 
                    <a href="#"> MySQL</a>, <a href="#">TailwindCSS</a>, 
                    <a href="#"> Docker & Docker Compose</a>, <a href="#">WebFlux</a>, 
                    <a href="#"> Rechart</a>, <a href="#">MoMo Payment</a>
                  </p>
                  <p className="blog-tags">
                   Link Github: <a href="https://github.com/HUUQUY1004/chatbot">To</a>
                  </p>
                </div>
              </div>
            </div>
            {/* Blog Item 1 End */}
            {/* Blog Item 2 */}
            <div className="blog-item padd-15">
              <div className="blog-item-inner shadow-dark">
                <div className="blog-img">
                 
                  <div className="blog-date">June 4, 2020</div>
                </div>
                <div className="blog-info">
                  <h4 className="blog-title">
                    Social
                  </h4>
                  <p title="A social platform where users can create personal profiles, share their thoughts, interact 
                    with others through posts, comments, and likes, and stay connected with friends in real time.
                  " className="blog-description">
                    A social platform where users can create personal profiles, share their thoughts, interact 
                    with others through posts, comments, and likes, and stay connected with friends in real time.
                  </p>
                  <h3>Features</h3>
                  <ul className="blog-features">
                    <li>User registration, login, and password recovery.</li>
                    <li>User prozle management and avatar update.</li>
                    <li>Users can create, edit, and publish posts.</li>
                    <li>Generate image captions automatically using BLIP model.</li>
                    <li>Like, comment, and share posts.</li>
                    <li>Friend system: send/accept/reject friend requests.</li>
                    <li>Real-time notifications for interactions and system events.</li>
                    <li>Instant messaging (chat) with WebSocket/SignalR.</li>
                    <li>Real-time video calls using WebRTC (I use Stringee).</li>
                    <li>Convert language English-Vietnamese.</li>
                  </ul>
                  <p className="blog-tags">
                    Technology: <a href="#">ReactJs</a>, <a href="#">SpringBoot</a>,
                    <a href="#"> Zustand</a>, <a href="#">Redis</a>,
                    <a href="#"> MySQL</a>, <a href="#">TailwindCSS</a>,
                    <a href="#"> JWT</a>, <a href="#">JPA</a>,
                    <a href="#"> Websocket</a>, <a href="#">WebRTC (Stringee)</a>,
                    <a href="#"> React-i18next</a>, <a href="#">Multi-Modal Model (BLIP)</a>,
                    <a href="#"> FastAPI</a>
                  </p>
                  <p className="blog-tags">
                    Link Github: <a href="https://github.com/HUUQUY1004/socia">To</a>
                  </p>
                </div>
              </div>
            </div>
            {/* Blog Item 2 End */}
            {/* Blog Item 3 */}
            <div className="blog-item padd-15">
              <div className="blog-item-inner shadow-dark">
                <div className="blog-img">
                  
                  <div className="blog-date">June 4, 2020</div>
                </div>
                <div className="blog-info">
                  <h4 className="blog-title">
                   Nail Store
                  </h4>
                  <p title="An online platform for a nail salon where customers can browse and order products like an e-commerce store, and also book appointments for nail services." className="blog-description">
                    An online platform for a nail salon where customers can browse and order products like an e-commerce store, 
                    and also book appointments for nail services.
                  </p>
                  <h3>Features</h3>
                  <ul className="blog-features">
                    <li>User registration, login, and forgot password.</li>
                    <li>Add products to the cart.</li>
                    <li>Search and filter products.</li>
                    <li>Checkout with multiple payment methods: Cash, Momo, and Bank Transfer.</li>
                    <li>Integrated with Casso for automatic bank transfer confirmation.</li>
                    <li>Select or add a new shipping address during checkout.</li>
                    <li>Cancel orders.</li>
                    <li>Schedule appointments.</li>
                    <li>View and manage appointment history.</li>
                    <li>Import department or service data via Excel file.</li>
                  </ul>
                  <p className="blog-tags">
                    Technology: <a href="#">NextJS</a>, <a href="#">NestJS</a>, 
                    <a href="#"> MongoDB</a>, <a href="#">JWT</a>, 
                    <a href="#"> Mongoose</a>, <a href="#">Shadcn/UI</a>, 
                    <a href="#"> Zustand</a>, <a href="#">Socket.io</a>, 
                    <a href="#"> Tailwind</a>, <a href="#">Casso</a>, 
                    <a href="#"> MoMo Payment</a>, <a href="#">Redis</a> 
                  </p>
                  <p className="blog-tags">
                    Link Github: <a href="https://github.com/HUUQUY1004/nail-ecommerce">To</a>
                  </p>
                </div>
              </div>
            </div>
            {/* Blog Item 3 End */}
          </div>
        </div>
      </section>
    </>
  );
};

export default Blog;
