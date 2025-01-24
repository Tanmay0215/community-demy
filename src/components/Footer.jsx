import React from "react"

function Footer() {
  return (
    <footer className="py-12">
        <div className="container px-4 mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            <div>
              <h3 className="font-bold mb-4">Community Hub</h3>
              <p className="text-sm opacity-80">
                Learn, share, and grow with our community of passionate learners.
              </p>
            </div>
            {["Courses", "Community", "About Us", "Contact"].map((section, i) => (
              <div key={i}>
                <h4 className="font-bold mb-4">{section}</h4>
                <ul className="space-y-2">
                  {[1, 2, 3].map((item) => (
                    <li key={item} className="text-sm opacity-80 hover:opacity-100">
                      <a href="#">Link {item}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="border-t border-primary-foreground/10 mt-8 pt-8 text-center text-sm opacity-80">
            <p>&copy; 2025 Community Hub. All rights reserved.</p>
          </div>
        </div>
      </footer>
  )
}

export default Footer
