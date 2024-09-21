const posts = [
  {
    id: 1,
    content: `
      <h2>Exploring the Beauty of Nature</h2>
      <p>Nature is a vast and varied entity, capable of stirring feelings of awe and inspiration. From the majestic mountains that rise high into the sky to the quiet, serene forests teeming with life, there is much to appreciate and admire in the natural world.</p>
      <img src="https://www.shutterstock.com/shutterstock/photos/159086927/display_1500/stock-photo-black-rowan-berries-on-branches-with-red-leaves-on-an-abstract-background-of-autumn-159086927.jpg" alt="Mountain View" class="my-4"/>
      <p>The <strong>mountains</strong> symbolize strength and perseverance, standing tall through all seasons and weather conditions. A hike through these towering giants can be a spiritual experience, offering a deep connection to the earth and a sense of inner peace.</p>
      <p><em>Meanwhile, the forest, with its lush greenery and vibrant wildlife, offers a different kind of serenity. Walking through a forest trail, you’re surrounded by the sound of rustling leaves, birdsong, and the occasional scurrying of small animals. It’s a world where life thrives, often unnoticed by the busy modern world.</em></p>
      <ul>
        <li>The towering trees provide shade and shelter</li>
        <li>The rivers and streams bring life and nourishment</li>
        <li>Wildflowers bloom in bursts of color</li>
      </ul>
      <p>Here’s an image of a serene forest:</p>
      <img src="https://www.shutterstock.com/shutterstock/photos/159086927/display_1500/stock-photo-black-rowan-berries-on-branches-with-red-leaves-on-an-abstract-background-of-autumn-159086927.jpg" alt="Serene Forest" class="my-4"/>
      <blockquote>“The clearest way into the Universe is through a forest wilderness.” – John Muir</blockquote>
      <p>In summary, nature’s beauty is both diverse and powerful, from its smallest details to its grandest landscapes.</p>
    `,
  },
  {
    id: 2,
    content: `
      <h2>Adventures in Technology: The Future of AI</h2>
      <p>The rapid advancement of artificial intelligence (AI) is transforming industries and shaping the future in unprecedented ways. From healthcare to finance, AI is revolutionizing how we live and work.</p>
      <img src="https://www.shutterstock.com/shutterstock/photos/159086927/display_1500/stock-photo-black-rowan-berries-on-branches-with-red-leaves-on-an-abstract-background-of-autumn-159086927.jpg" alt="AI Innovation" class="my-4"/>
      <p><strong>Healthcare</strong> has seen significant improvements with AI-driven diagnostics. Machine learning algorithms can analyze vast amounts of medical data, detecting patterns and making accurate predictions, often faster and more precisely than human professionals.</p>
      <p>In <strong>finance</strong>, AI is being used for fraud detection, automated trading, and personalized financial advice. Banks and financial institutions are leveraging AI to provide more secure and efficient services to their customers.</p>
      <p>Here’s another exciting aspect:</p>
      <img src="https://www.shutterstock.com/shutterstock/photos/159086927/display_1500/stock-photo-black-rowan-berries-on-branches-with-red-leaves-on-an-abstract-background-of-autumn-159086927.jpg" alt="Futuristic AI Robot" class="my-4"/>
      <p>Looking forward, the possibilities seem endless. <em>From autonomous vehicles to AI-generated art, the future holds much promise for continued innovation and disruption across all sectors.</em></p>
      <ol>
        <li>AI-powered healthcare diagnostics</li>
        <li>Autonomous vehicles</li>
        <li>AI-generated art and creativity</li>
      </ol>
      <blockquote>“The pace of progress in artificial intelligence is incredibly fast. Unless you have direct exposure to groups like DeepMind, you have no idea how fast it is growing.” – Elon Musk</blockquote>
    `,
  },
  {
    id: 3,
    content: `
      <h3>The Culinary World: Discovering International Cuisine</h3>
      <p>Food is more than just sustenance; it’s a celebration of culture, history, and creativity. From the spices of India to the fresh ingredients of Japan, international cuisine offers a taste of the world’s rich diversity.</p>
      <img src="https://www.shutterstock.com/shutterstock/photos/159086927/display_1500/stock-photo-black-rowan-berries-on-branches-with-red-leaves-on-an-abstract-background-of-autumn-159086927.jpg" alt="Spices from India" class="my-4"/>
      <p><strong>Indian cuisine</strong> is known for its bold flavors and vibrant spices. Dishes like <em>tikka masala</em>, <em>dal makhani</em>, and <em>samosas</em> are beloved around the world for their intricate balance of spices, often featuring cumin, coriander, and turmeric.</p>
      <p><strong>Japanese cuisine</strong> offers a more subtle yet equally rich culinary experience. Sushi, ramen, and tempura are staples of Japanese dining, known for their emphasis on fresh, high-quality ingredients and simple preparation methods that let the flavors shine.</p>
      <img src="https://www.shutterstock.com/shutterstock/photos/159086927/display_1500/stock-photo-black-rowan-berries-on-branches-with-red-leaves-on-an-abstract-background-of-autumn-159086927.jpg" alt="Japanese Sushi Platter" class="my-4"/>
      <p>International cuisine teaches us that food is not only a necessity but an art form and a means of connecting with others. Trying dishes from different cultures expands our palate and appreciation for the world around us.</p>
      <ul>
        <li>Indian spices: bold, flavorful, and vibrant</li>
        <li>Japanese cuisine: fresh, simple, and artfully presented</li>
        <li>French cuisine: delicate, refined, and luxurious</li>
      </ul>
      <p>Here’s a quote about food:</p>
      <blockquote>“Food is not just eating energy. It's an experience.” – Guy Fieri</blockquote>
    `,
  },
];

const News = () => {
  return (
    <div className="bg-[#F5F5F5] min-h-screen py-10">
      <div className="w-11/12 mx-auto py-8">
        <h1 className="text-3xl font-bold mb-6 text-center">Aktualności</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => (
            <div
              key={post.id}
              className="bg-white border border-gray-200 rounded-lg p-6 shadow hover:shadow-lg transition-transform transform hover:-translate-y-2"
            >
              <div dangerouslySetInnerHTML={{ __html: post.content }} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default News;
