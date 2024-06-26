interface Result {
    id: string;
    image_url: string;
    name: string;
    intro: string;
    tags: string;
    url: string;
    description: string;
  }
  
  interface SearchResultsProps {
    results: Result[];
  }
import { Box, Card, Inset, Strong, Text, Link } from '@radix-ui/themes';
  
const SearchResults: React.FC<SearchResultsProps> = ({ results }) => {

    return (
        
        <div className='flex gap-4'>
            {results?.map((result) => (
                <Box className='max-w-80 rounded-lg ' key={result.id}>
                    <Link href={result.url} target="_blank">
                        <Card size="2" className='border-2 border-white rounded-lg h-[350px] max-h-[400px]'>
                            <Inset className='px-2 pt-2' clip="padding-box" side="top" pb="current">
                            <img
                                src={result.image_url}
                                alt="Bold typography"
                                style={{
                                display: 'block',
                                objectFit: 'cover',
                                width: '100%',
                                height: 140,
                                backgroundColor: 'var(--gray-5)',
                                }}
                            />
                            </Inset>
                            <Text mt="6" as="p" size="3" className="p-4 h-[190px] overflow-hidden">
                                <Strong className="mb-2">{result.name}</Strong> <br />
                                {result.intro}
                            </Text>
                        </Card>
                    </Link>
                </Box>
            ))}
        </div>
    );
};
  
  export default SearchResults;