# test stuff


.overlay {
  background-color: rgba(0, 0, 0, 0.48);
  padding: 1rem 4rem;         /* Enough padding around text */
  border-radius: 100px;        /* Rounded corners */
  text-align: center;          /* Center text */
  position: relative;
  backdrop-filter: blur(2px);

  /* Remove flex-grow and flex centering */
  flex-grow: 0;               /* Don't stretch vertically */
  display: inline-block;      /* Shrink wrap content */
  margin: auto;               /* Center horizontally */
  max-width: 90vw;            /* Responsive max width */
}
