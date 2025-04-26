export default function About(){
  return (
<>
<div className="min-h-screen bg-gradient-to-br from-black via-pink-50 to-white flex items-center justify-center p-8">
<div className="bg-white shadow-lg rounded-lg p-8 max-w-5xl mx-auto">
  <h1 className="text-4xl font-bold text-pink-600 mb-4">About Me</h1>
  <p className="text-gray-700 mb-4">
    I'm a passionate food lover and tech enthusiast. I enjoy exploring new cuisines and sharing my culinary adventures with others. My goal is to create a platform that connects food lovers and helps them discover the best dining experiences.
  </p>
  <p className="text-gray-700 mb-4">
    I believe that food is not just about sustenance; it's about culture, community, and connection. Through this platform, I aim to bring people together over their shared love for food.
  </p>
  <p className="text-gray-700 mb-4">
    When I'm not exploring new restaurants or trying out new recipes, you can find me reading about the latest tech trends or working on my next big project.
  </p>
  <p className="text-gray-700 mb-4">
    If you have any questions or just want to chat about food, feel free to reach out!
  </p>
</div>
</div>
<div className="p-8">
<h1 className="text-3xl font-bold mb-6">Help-Line</h1>
<ul className="space-y-4">
  <li>
    <a href="/help" className="text-pink-600 hover:underline text-lg">Help</a>
  </li>
  <li>
    <a href="/contact" className="text-pink-600 hover:underline text-lg">Contact Us</a>
  </li>
</ul>
</div>
</>
  );
}