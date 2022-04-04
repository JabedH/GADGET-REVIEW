import React from "react";

const Blogs = () => {
  return (
    <div className="grid grid-cols-3 gap-10 m-10 text-justify mt-20">
      <p>
        <h1 className="font-bold text-xl mb-5">What is context api? </h1>
        In a typical React application, data is passed top-down. if we want to
        access data first of all we have to send data to the child by using
        drilling. this is the reason we have to use "props" again and again. if
        we want to access data globally we can't. So For this react introduced
        Context API. The React Context API is a way for a React app to
        effectively produce global variables that can be passed around. This is
        the alternative to "props drilling". React.createContext() is all you
        need. It returns a consumer and a provider. The provider is a component
        that holds the "store" value. The consumer is a component that consumes
        and uses the state.
      </p>
      <p>
        <h1 className="font-bold text-xl mb-5">what is semantic tag?</h1>A
        semantic tag clearly describes the meaning to the web page rather than
        just presentation. for example semantic tags : <b>table</b> and{" "}
        <b>article</b> - Clearly defines its content. but non-semantic elements:
        <b>div</b> and <b>span</b> Tells nothing about its content. * The
        semantic HTML tags help the search engines to determine the importance
        and context of web pages. * Semantic elements are much easier to read. *
        It offers a better user experience.
      </p>
      <p>
        <h1 className="font-bold text-xl mb-5">
          What is the difference between inline and inline block element?{" "}
        </h1>
        Displays an element as an inline element. inline element slow left and
        right margins and padding, but not top & bottom. we can not set width
        and height. Inline-block elements. Inline-block display behavior both of
        inline and block element. inline-block element slow left and right top
        bottom margins and padding. we can set width and height.
      </p>
    </div>
  );
};

export default Blogs;
