import * as React from 'react';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import FormHelperText from '@mui/joy/FormHelperText';
import Input from '@mui/joy/Input';
import Button from '@mui/joy/Button';

export default function InputSubscription() {
  const [data, setData] = React.useState<{
    email: string;
    status: 'initial' | 'loading' | 'failure' | 'sent';
  }>({
    email: '',
    status: 'initial',
  });

  const gold = '#DDAA4F'; // consistent gold rum color

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setData((current) => ({ ...current, status: 'loading' }));
    try {
      // Replace timeout with real backend operation
      setTimeout(() => {
        setData({ email: '', status: 'sent' });
      }, 1500);
    } catch (error) {
      setData((current) => ({ ...current, status: 'failure' }));
    }
  };

  return (
    <form onSubmit={handleSubmit} id="demo">
      <FormControl>
        <FormLabel sx={{ color: gold }}>
          SSC Newsletter
        </FormLabel>
        <Input
          sx={{
            '--Input-decoratorChildHeight': '45px',
            color: gold, // input text
            '&::placeholder': {
              color: gold,
              opacity: 0.7,
            },
            borderColor: gold,
            '&:hover': {
              borderColor: gold,
            },
            '&.Mui-focused': {
              borderColor: gold,
            },
          }}
          placeholder="mail@gmail.com"
          type="email"
          required
          value={data.email}
          onChange={(event) =>
            setData({ email: event.target.value, status: 'initial' })
          }
          error={data.status === 'failure'}
          endDecorator={
            <Button
              variant="solid"
              loading={data.status === 'loading'}
              type="submit"
              sx={{
                borderTopLeftRadius: 0,
                borderBottomLeftRadius: 0,
                backgroundColor: gold,
                color: 'white',
                '&:hover': {
                  backgroundColor: '#66001A', // darker burgundy
                },
              }}
            >
              Subscribe
            </Button>
          }
        />
        {data.status === 'failure' && (
          <FormHelperText sx={{ color: burgundy }}>
            Oops! something went wrong, please try again later.
          </FormHelperText>
        )}
        {data.status === 'sent' && (
          <FormHelperText sx={{ color: burgundy }}>
            You are all set!
          </FormHelperText>
        )}
      </FormControl>
    </form>
  );
}
