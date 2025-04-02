import Code from "../components/Code";
import Title from "../components/Title";
import Disclaimer from "../components/Disclaimer";
import CodeBlock from "../components/CodeBlock";
import ExternalLink from "../components/ExternalLink";

export default function RenderPatternArticle() {
    return (
        <div>
            <div className="flex flex-col gap-5">
                <Title variant="h1">The Render Pattern</Title>

                <Title variant="h2">A Magic World of Patterns</Title>
                <p>
                    There are a lot of patterns in computer science—just think
                    of Singletons, Observers, Composite, Chain of
                    Responsibility, Decorators, and many more. But, you know,
                    whenever you arrive at a new tech island, new rules and new
                    problems arise, and programmers have to find the juicy
                    patterns that help improve their exploration of that
                    technology.
                </p>
                <p>
                    In the island of OOP, there are plenty of well-known design
                    patterns, resting in the expert programmer’s toolbox and
                    ready to be used. But <strong>what about React?</strong>{" "}
                    It’s not OOP! Does React have its own patterns? Can you make
                    your React code more readable and flexible with a ready-made
                    pattern?
                </p>
                <p>
                    Well, the answer is yes! There are quite a few. Some of them
                    are just specific adaptations of our good old OOP design
                    patterns—like the Composite Pattern. But in this article, I
                    want to talk about one of my favorites: The Render Pattern.
                </p>
                <p>
                    Let me guide you through the discovery of this pattern, one
                    step at a time. 🙂
                </p>

                <Disclaimer noteText="A little disclaimer">
                    In this article, I’ll use <ExternalLink href="https://mui.com/material-ui/">Material UI</ExternalLink> components to make the
                    code more succinct. But of course, you can use any
                    components you want. You can create them from scratch and
                    then apply this pattern. However, for this tutorial, I
                    thought using ready-made components would be the best way to
                    go.
                </Disclaimer>

                <Title variant="h2">
                    Let's Build a <Code isComponent>DialogButton</Code>
                </Title>
                <p>
                    First of all... Let's imagine we want to create a{" "}
                    <Code isComponent>DialogButton</Code> component—a button
                    that opens a dialog containing a small form (or anything we
                    want) that the user can fill out and submit.
                </p>

                <p>
                    Start with the <Code isComponent>Button</Code>:
                </p>
                <CodeBlock>
                    {`export default function DialogButton() {
    return (
        <div>
            <Button>Click Me</Button>
        </div>
    )
}`}
                </CodeBlock>

                <p>Now! We want our fantastic dialog:</p>
                <CodeBlock>
                    {`// material imports here...
export default function DialogButton() {
  return (
      <div>
          <Button>Click Me</Button>
          <Dialog>Hi there from Dialog</Dialog>
      </div>
  )
}`}
                </CodeBlock>

                <p>
                    Of course, we want our <Code isComponent>Dialog</Code>{" "}
                    component to be toggleable! We just need a bit of state
                    logic to make that happen:
                </p>
                <CodeBlock>
                    {`// material imports here...

export default function DialogButton() {

  const [isOpen, setIsOpen] = useState(false);

  const openDialog = () => setIsOpen(true);
  const closeDialog = () => setIsOpen(false);

  return (
      <div>
          <Button onClick={openDialog}>Click Me</Button>
          <Dialog
              open={isOpen}
              onClose={closeDialog}
          >
              Hi there from Dialog
          </Dialog>
      </div>
  )
}`}
                </CodeBlock>
                
                <Disclaimer noteText="Material UI">
                    If you want to understand better the Material UI <Code isComponent>Dialog</Code> component go to the <ExternalLink href="https://mui.com/material-ui/react-dialog/">official guide</ExternalLink>.
                </Disclaimer>
                

                <Title variant="h2">One Pattern, Multiple Solutions</Title>
                <p>
                    Next step! Let’s make this component more flexible! We want
                    to allow the client to customize both the{" "}
                    <Code isComponent>Button</Code>{" "}
                    text and the <Code isComponent>Dialog</Code> content. Let's
                    do it!
                </p>

                <p>
                    But first, I want to point out two different solutions! Why?
                    Because you know that coding doesn't have a RIGHT answer,
                    this is just my answers, and you may want to pick one after
                    the other depending on your specific needs. In the first
                    option I want to define the <Code>buttonText</Code> as a
                    prop, in the other option as a child of the{" "}
                    <Code isComponent>DialogButton</Code> component (both are good choices! It's on you deciding which
                    one to pick).
                </p>

                <p>The first option:</p>
                <CodeBlock>
                    {`export default function DialogButton({
  buttonText, 
  dialogContent 
}) {

  const [isOpen, setIsOpen] = useState(false);

  const openDialog = () => setIsOpen(true);
  const closeDialog = () => setIsOpen(false);

  return (
      <div>
          <Button onClick={openDialog}>{buttonText}</Button>
          <Dialog open={isOpen} onClose={closeDialog}>{dialogContent}</Dialog>
      </div>
  )
}
`}
                </CodeBlock>
                <p>Usage:</p>

                <CodeBlock>
                    {`function App() {
    return (
        <DialogButton
            buttonText="Click Me"
            dialogContent={<div>Dialog Form</div>}
        />
    )
}`}
               </CodeBlock>

                <p>The second option:</p>
                <CodeBlock>
                    {`// second option
export default function DialogButton({ dialogContent, ...props }) {

  const [isOpen, setIsOpen] = useState(false);

  const openDialog = () => setIsOpen(true);
  const closeDialog = () => setIsOpen(false);

  return (
      <div>
          <Button onClick={openDialog}>{props.children}</Button>
          <Dialog open={isOpen} onClose={closeDialog}>{dialogContent}</Dialog>
      </div>
  )
}`}
                </CodeBlock>
                <p>Usage:</p>

                <CodeBlock>
                    {`function App() {
    const Dialog = () => <div>Dialog form<Div>
    return (
        <DialogButton dialogContent={<Dialog/>}>
            Click Me
        </DialogButton>
    )
}`}
               </CodeBlock>

                <Disclaimer noteText="note">
                    Why <Code>props.children</Code> and not just{" "}
                    <Code>children</Code>? This is for another post...
                </Disclaimer>

                <p>PERFECT! Now, this being said. I will go for the <em>first option</em>! I think it makes the client code a bit more readable (not our code... the programmer code is always a little bit uglier).</p>

                <Title variant="h2">
                    One Problem, One Solution, One Pattern
                </Title>
                <p>
                    We’re finally done! The button works, and the dialog shows!
                    Time to take a break, right? Well… not so fast, mister! We
                    have a <strong>problem</strong>. But wait—how can the user
                    close the dialog programmatically? What if we want them to
                    close it using a <em>Cancel</em> button inside the form
                    instead of just clicking outside the Dialog itself? Here is
                    where the <strong>Render Pattern</strong> comes into place
                    and shines.
                </p>

                <p>
                    With the Render Pattern we can delegate some aspects of the
                    component internals (logic state and data) to the client. In
                    this case, we'll give the user the ability to access a{" "}
                    <strong>state setter</strong> function,{" "}
                    <Code>closeDialog</Code>.
                </p>

                <p>
                    Let’s give users the ability to close the dialog wherever
                    and whenever they want by exposing the{" "}
                    <Code>closeDialog</Code>
                    function. How? Let's see the pattern in action:
                </p>

                <CodeBlock>
                    {`export default function DialogButton({ 
  renderDialogContent, 
  ...props
}) {
  const [isOpen, setIsOpen ] = useState(false);

  const openDialog = () => setIsOpen(true);
  const closeDialog = () => setIsOpen(false);
  
  return (
      <div>
          <Button onClick={openDialog}>{props.children}</Button>
          <Dialog
              open={isOpen}
              onClose={closeDialog}
          >{renderDialogContent(closeDialog)}</Dialog>
      </div>
  )
}`}
                </CodeBlock>

                <p>
                    You can see that the <Code>dialogContent</Code> prop has
                    been replaced with the <Code>renderDialogContent</Code>{" "}
                    prop, a function that takes as input the{" "}
                    <Code>closeDialog</Code> callback function.
                </p>

                <p>
                    Now the user can create any kind of form, with all the
                    components they want, and delegate the closure of the dialog
                    to any component and any event.
                </p>

                <p>Usage Example:</p>
                <CodeBlock>
                    {`<DialogButton
  renderDialogContent={(closeDialog) => (
      <div>
          <p>Dialog Form</p>
          <Button
              onClick={closeDialog}
          >Cancel</Button>
      </div>
  )}
>
  Click Me
</DialogButton>`}
                </CodeBlock>

                <h3>Alternative Usage Example:</h3>
                <CodeBlock>
                    {`<DialogButton
  renderDialogContent={(closeDialog) => (
      <div onDoubleClick={closeDialog}>
          <p>Dialog Form</p>
          <Button>Cancel</Button>
      </div>
  )}
>
  Click Me
</DialogButton>`}
                </CodeBlock>

                <Title variant="h2">Conclusion</Title>
                <p>
                    That's it! With the Render Pattern, we created a highly
                    customizable <Code isComponent>DialogButton</Code> component
                    that gives the client complete control over the button and
                    dialog content, as well as the ability to control the
                    dialog's state programmatically. Feel free to implement this
                    in your own projects!
                </p>
            </div>
        </div>
    );
}
