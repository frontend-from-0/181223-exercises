import Image from "next/image";

export const CreatedRecipe = ({title, instructions, image}: {title: string; instructions: string; image: string}) => {
  return (
    <div data-testid='create-recipe-card'>
      <h2 data-testid='create-recipe-title'>{title}</h2>
      <p>{instructions}</p>
      <Image src={image} alt={title} width='150' height='150'/>
    </div>
  )
}