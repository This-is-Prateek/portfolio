import React from 'react'

/**
 * Parses newline characters (\n) in a string and converts them to React elements
 * @param text - The text string that may contain \n characters
 * @returns Array of React elements with <br /> tags for line breaks
 */
export const parseNewlines = (text: string): (string | React.ReactElement)[] => {
  return text.split('\n').map((line, index, array) => {
    if (index < array.length - 1) {
      return (
        <React.Fragment key={index}>
          {line}
          <br />
        </React.Fragment>
      )
    }
    return line
  })
}

/**
 * Alternative: Parses newlines and returns JSX with paragraphs
 * @param text - The text string that may contain \n characters
 * @returns JSX element with paragraphs for each line
 */
export const parseNewlinesToParagraphs = (text: string): React.ReactElement => {
  const lines = text.split('\n').filter(line => line.trim() !== '')
  return (
    <>
      {lines.map((line, index) => (
        <p key={index} className={index > 0 ? 'mt-4' : ''}>
          {line}
        </p>
      ))}
    </>
  )
}

