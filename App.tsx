import React from 'react';
import ThemeLayout from './components/ThemeLayout';
import ReadabilityChecker from './components/ReadabilityChecker';
import SeoArticle from './utils/SeoArticle';
import { FaBolt, FaInfinity, FaHighlighter, FaChartLine, FaRocket, FaPenNib, FaSearch, FaUsers } from 'react-icons/fa';

const FeatureCard: React.FC<{ icon: React.ReactNode; title: string; children: React.ReactNode }> = ({ icon, title, children }) => (
    <div className="bg-gray-50 rounded-lg p-6">
        <div className="flex items-center text-custom-purple mb-3">
            <div className="p-2 bg-purple-100 rounded-full mr-3">{icon}</div>
            <h3 className="text-xl font-bold text-gray-800">{title}</h3>
        </div>
        <p className="text-gray-600">{children}</p>
    </div>
);

const Step: React.FC<{ num: number; title: string; children: React.ReactNode }> = ({ num, title, children }) => (
    <div className="bg-gray-100/50 p-6 rounded-lg border border-gray-200">
        <div className="text-sm font-bold text-custom-purple mb-2">Step {num}</div>
        <h3 className="text-lg font-bold text-gray-800 mb-2">{title}</h3>
        <p className="text-gray-600 text-sm">{children}</p>
    </div>
);

const FaqItem: React.FC<{ question: string; children: React.ReactNode }> = ({ question, children }) => {
    const [isOpen, setIsOpen] = React.useState(false);
    return (
        <div className="border-b border-gray-200 py-4">
            <button
                className="w-full flex justify-between items-center text-left text-gray-800 font-semibold"
                onClick={() => setIsOpen(!isOpen)}
            >
                <span>{question}</span>
                <span className={`transform transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                </span>
            </button>
            {isOpen && <div className="mt-3 text-gray-600 pr-8">{children}</div>}
        </div>
    );
};

const App: React.FC = () => {
    return (
        <ThemeLayout>
            <main>
                {/* Hero / Tool Section */}
                <section className="py-16 sm:py-24 bg-white">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <ReadabilityChecker />
                    </div>
                </section>

                {/* Why you need Section */}
                <section className="py-16 sm:py-24 bg-gray-50">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                        <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">Why you need Doodax's readability checker</h2>
                        <p className="mt-6 text-lg text-gray-600">
                            Readability is an essential metric for any writer. Our tool automatically calculates the reading level of your text and provides instant feedback. Highlighted sentences show you where your readers will understand your message in a single read-through. If your average grade level is too high, it creates a cognitive strain for readers, causing them to struggle with the text or even give up midway through.
                        </p>
                    </div>
                </section>

                {/* Feature Grid Section */}
                <section className="py-16 sm:py-24 bg-white">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-12">
                             <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">Doodax is the best readability checker</h2>
                        </div>
                        <div className="grid md:grid-cols-2 gap-8">
                            <FeatureCard icon={<FaBolt size={20} />} title="Instant readability scoring and feedback">
                                The majority of readability tools require a significant delay to calculate your scores. In tools like Microsoft Word, your page needs to be re-read every few seconds to see how your writing scores. Our tool gives you instant feedback, which is key since the minor editing choices you make can see how every single change affects your readability.
                            </FeatureCard>
                             <FeatureCard icon={<FaInfinity size={20} />} title="Unlimited word count">
                                Our free readability checker allows you to scan an unlimited amount of text at once. Without those pesky word limits from other tools, you can analyze an entire document or even a whole novel to see how it scores.
                            </FeatureCard>
                             <FeatureCard icon={<FaHighlighter size={20} />} title="Highlighting complicated sentences">
                                An overall readability score is a great metric to analyze your writing, but it doesn't tell the full story. Two pieces of text might get a grade level 8 score, but one is straightforward, and the other gets very complicated. Our tool helps you pinpoint the exact sentences that are hard-to-read.
                            </FeatureCard>
                             <FeatureCard icon={<FaChartLine size={20} />} title="Readability scores you can easily understand">
                                The most common readability metrics can be confusing. With Doodax, you’ll find out the grade level your audience needs to understand your writing. You can then confidently adjust your writing to meet their needs.
                            </FeatureCard>
                        </div>
                    </div>
                </section>

                {/* Upsell CTA Block */}
                <section className="bg-custom-purple">
                    <div className="max-w-4xl mx-auto text-center py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
                        <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
                            <span className="block">Improve readability automatically</span>
                            <span className="block">with Doodax Editor Plus</span>
                        </h2>
                        <p className="mt-4 text-lg leading-6 text-purple-100">
                            Doodax Editor Plus uses cutting-edge AI to rewrite your text for you. It analyzes your writing and offers suggestions to make it simpler, clearer, and easier to read. You can choose to rewrite an individual sentence or select a larger section of text for a full document, and correct it at once. This feature integrates with Ollama to run locally or in the cloud.
                        </p>
                        <a
                            href="#"
                            className="mt-8 w-full inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-custom-purple bg-white hover:bg-purple-50 sm:w-auto"
                        >
                            Try Editor Plus for free
                        </a>
                    </div>
                </section>
                
                 {/* Use Cases Section */}
                <section className="py-16 sm:py-24 bg-white">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                        <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight text-center mb-12">Powerful use cases for Doodax's readability checker app</h2>
                        <div className="space-y-10">
                             <FeatureCard icon={<FaRocket size={20} />} title="Supercharge your marketing materials">
                                Imagine spending hours crafting the perfect marketing email or blog post. Then, after hours of research, planning, drafting, and editing, you find out that only half of your audience can read it. It is paramount that the readability of your writing is low.
                            </FeatureCard>
                             <FeatureCard icon={<FaSearch size={20} />} title="Improve SEO performance">
                                Readability is one of the most important factors for writing great SEO content. If readers struggle to understand what you have written, they will leave your site and destroy SEO performance. Poor readability also affects the accessibility of your content because people with disabilities will have a hard time with it.
                            </FeatureCard>
                             <FeatureCard icon={<FaPenNib size={20} />} title="Write better essays and get better grades">
                                Think you need to write your homework at a high grade level to get an A? Think again. Most professors complain about how hard it is to grade essays because of weak writing. That's because run-ons and long, confusing sentences are the most common errors that students make.
                            </FeatureCard>
                             <FeatureCard icon={<FaUsers size={20} />} title="Humanize AI writing">
                                AI tools like ChatGPT produce writing that sounds stiff and robotic. One of the biggest reasons they sound so unnatural is that their writing has poor readability. After drafting your text with AI, try running it through Doodax's readability checker for a final polishing step.
                            </FeatureCard>
                        </div>
                    </div>
                </section>


                {/* How-to Guide Section */}
                <section className="py-16 sm:py-24 bg-gray-50">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">How to use this free online readability checker in your writing</h2>
                        </div>
                        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                            <Step num={1} title="Input Your Text">
                                Type or paste text into the input field. You can also import files directly from your computer.
                            </Step>
                            <Step num={2} title="Get Your Score">
                                Doodax automatically analyzes your document and provides an overall readability score.
                            </Step>
                            <Step num={3} title="Review Highlights">
                                Examine the highlighted sentences to identify friction spots. Yellow sentences are hard to read, and red sentences are very hard to read.
                            </Step>
                            <Step num={4} title="Finalize Your Text">
                                Copy your finished text or click to export as a Word doc, Markdown file, or text file.
                            </Step>
                        </div>
                    </div>
                </section>
                
                {/* FAQs Section */}
                <section className="py-16 sm:py-24 bg-white">
                    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                         <div className="text-center mb-12">
                            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">FAQs</h2>
                        </div>
                        <div className="space-y-4">
                            <FaqItem question="What is a readability checker?">A readability checker is a tool that analyzes your writing to determine how easy it is to read and understand. It typically uses algorithms like the Flesch-Kincaid Grade Level to assign a score, helping you identify complex sentences and vocabulary.</FaqItem>
                            <FaqItem question="How does a readability score checker work?">It works by counting the total number of words, sentences, and syllables in your text. These numbers are then plugged into a mathematical formula to calculate a score, which often corresponds to a grade level. A lower grade level means the text is easier to read.</FaqItem>
                            <FaqItem question="What are the best free readability checker tools?">The Doodax Readability Checker is one of the best free tools available. It provides instant feedback, unlimited word count, and highlights specific sentences that are hard to read, giving you actionable insights to improve your writing.</FaqItem>
                            <FaqItem question="Can I check readability in Word documents?">Yes, you can check readability in Microsoft Word, but our tool offers a more intuitive and instant feedback loop. You can simply paste your text from Word into our checker or use the 'Import file' feature for a seamless experience.</FaqItem>
                             <FaqItem question="Can I check readability in Google Docs?">While Google Docs doesn't have a built-in readability checker as advanced as this one, you can easily copy your text from Google Docs and paste it into our tool to get a detailed readability analysis and suggestions for improvement.</FaqItem>
                        </div>
                    </div>
                </section>
                
                {/* SEO Article Section */}
                <SeoArticle />

            </main>
        </ThemeLayout>
    );
};

export default App;