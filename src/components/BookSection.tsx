import { useState } from 'react';
import { Book, ExternalLink, Download, Quote } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const BookSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const bookExcerpts = [
    {
      title: "Pattern of Deception",
      excerpt: "What you've heard in the mainstream media about January 6th is not the complete story. Just as we've seen with countless other major stories over the past several years, the narrative presented to the American people has been carefully crafted to serve a particular agenda."
    },
    {
      title: "Setting the Record Straight", 
      excerpt: "After serving three and a half years in federal prison across eleven different facilities, and following my presidential pardon in January 2025, I feel compelled to share the truth about what really happened."
    },
    {
      title: "The Real Story",
      excerpt: "This book represents my personal account of the events surrounding January 6th, 2021, and the circumstances that led to that pivotal day in American history."
    }
  ];

  const chapters = [
    "The Pattern of Deception",
    "Who I Am", 
    "The Real Story Behind January 6th",
    "When It All Started",
    "The Summer of Love vs. January 6th",
    "The Election Aftermath", 
    "What Really Happened That Day",
    "The Truth About Police Actions",
    "Justice and Injustice",
    "Moving Forward"
  ];

  return (
    <section className="relative py-24 px-8 overflow-hidden">
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 mb-6">
            <Book className="w-8 h-8 text-accent" />
            <span className="text-sm font-space uppercase tracking-widest text-accent font-bold">
              Featured Publication
            </span>
          </div>
          <h2 className="text-6xl font-space font-bold text-foreground mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            The January 6th Truth
          </h2>
          <p className="text-xl font-inter text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A Personal Account of What Really Happened - By Jeffrey Scott Brown
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Book Cover/Info */}
          <div className="relative">
            <div className="bg-gradient-to-br from-primary to-accent p-8 rounded-xl shadow-2xl text-white">
              <div className="mb-6">
                <h3 className="text-3xl font-space font-bold mb-4">THE JANUARY 6TH TRUTH</h3>
                <p className="text-lg opacity-90 mb-4">A Personal Account of What Really Happened</p>
                <p className="text-sm opacity-75">By Jeffrey Scott Brown</p>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Quote className="w-5 h-5" />
                  <span className="text-sm">First-hand account from a January 6th participant</span>
                </div>
                <div className="flex items-center gap-3">
                  <Book className="w-5 h-5" />
                  <span className="text-sm">10 comprehensive chapters</span>
                </div>
                <div className="flex items-center gap-3">
                  <ExternalLink className="w-5 h-5" />
                  <span className="text-sm">Available online for free</span>
                </div>
              </div>
            </div>
            
            {/* Floating badge */}
            <div className="absolute -top-4 -right-4 bg-accent text-accent-foreground px-6 py-2 rounded-full text-sm font-bold shadow-lg">
              FREE READ
            </div>
          </div>

          {/* Excerpts */}
          <div className="space-y-6">
            {bookExcerpts.map((excerpt, index) => (
              <Card key={index} className="bg-white/5 backdrop-blur-sm border-l-4 border-l-accent hover:shadow-lg transition-all duration-300 hover:bg-white/10">
                <CardContent className="p-6">
                  <h4 className="font-space font-semibold text-foreground mb-3">{excerpt.title}</h4>
                  <p className="text-muted-foreground italic leading-relaxed">&ldquo;{excerpt.excerpt}&rdquo;</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
              <DialogTrigger asChild>
                <Button size="lg" className="donate-button min-w-[200px]">
                  <Book className="w-5 h-5 mr-2" />
                  READ PREVIEW
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
                <DialogHeader>
                  <DialogTitle className="text-2xl font-space font-bold text-center mb-4">
                    The January 6th Truth - Chapter Overview
                  </DialogTitle>
                </DialogHeader>
                <div className="space-y-6">
                  <div className="text-center">
                    <h3 className="text-xl font-space font-bold text-primary mb-3">Table of Contents</h3>
                    <div className="grid md:grid-cols-2 gap-3">
                      {chapters.map((chapter, index) => (
                        <div key={index} className="flex items-center gap-2 p-3 bg-card rounded-lg border">
                          <span className="text-accent font-bold">Ch. {index + 1}</span>
                          <span className="text-sm font-inter">{chapter}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="bg-gradient-to-r from-primary/10 to-accent/10 p-6 rounded-lg">
                    <h4 className="font-space font-bold text-lg mb-3">About This Book</h4>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      This book represents a first-hand account from Jeffrey Scott Brown about the events surrounding January 6th, 2021. 
                      After serving time in federal prison and receiving a presidential pardon, Jeff shares his perspective on what really 
                      happened that day and challenges the mainstream narrative.
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      The book covers everything from the lead-up to January 6th, personal experiences during the event, 
                      the legal aftermath, and reflections on justice, truth, and moving forward as a nation.
                    </p>
                  </div>

                  <div className="text-center pt-4">
                    <Button 
                      onClick={() => window.open('https://btapcsve.manussite.space/', '_blank')}
                      size="lg" 
                      className="donate-button"
                    >
                      <ExternalLink className="w-5 h-5 mr-2" />
                      READ FULL BOOK ONLINE
                    </Button>
                  </div>
                </div>
              </DialogContent>
            </Dialog>

            <Button 
              variant="outline" 
              size="lg" 
              onClick={() => window.open('https://btapcsve.manussite.space/', '_blank')}
              className="min-w-[200px] border-2 border-accent text-accent hover:bg-accent hover:text-accent-foreground"
            >
              <ExternalLink className="w-5 h-5 mr-2" />
              FULL BOOK
            </Button>
          </div>
          
          <p className="text-sm text-muted-foreground mt-4">
            Available to read online for free • First-hand account of January 6th events
          </p>
        </div>
      </div>
    </section>
  );
};

export default BookSection;