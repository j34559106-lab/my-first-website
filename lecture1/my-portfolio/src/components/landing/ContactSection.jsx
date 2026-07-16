import { useEffect, useState } from 'react';
import Card from '@mui/material/Card';
import IconButton from '@mui/material/IconButton';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import EmailRoundedIcon from '@mui/icons-material/EmailRounded';
import GitHubIcon from '@mui/icons-material/GitHub';
import SectionContainer from '../ui/SectionContainer';
import GuestbookForm from './GuestbookForm';
import GuestbookList from './GuestbookList';
import { supabase } from '../../lib/supabase';

const EMAIL = 'j34559106@gmail.com';
const GITHUB_URL = 'https://github.com/j34559106-lab';

/**
 * ContactSection 컴포넌트
 *
 * Props: 없음 (children 없음)
 *
 * Example usage:
 * <ContactSection />
 */
function ContactSection() {
  const [entries, setEntries] = useState([]);
  const [isLoadingEntries, setIsLoadingEntries] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [snackbar, setSnackbar] = useState({ open: false, severity: 'success', message: '' });

  useEffect(() => {
    let isMounted = true;

    const fetchEntries = async () => {
      const { data, error } = await supabase
        .from('portfolio_guestbook_public')
        .select('*')
        .order('created_at', { ascending: false });

      if (isMounted) {
        if (!error) {
          setEntries(data);
        }
        setIsLoadingEntries(false);
      }
    };

    fetchEntries();

    return () => {
      isMounted = false;
    };
  }, []);

  const handleGuestbookSubmit = async (values) => {
    setIsSubmitting(true);

    const { data, error } = await supabase
      .from('portfolio_guestbook')
      .insert([
        {
          name: values.name,
          message: values.message,
          email: values.email || null,
          sns_handle: values.snsHandle || null,
          region: values.region || null,
          age_group: values.ageGroup || null,
          referral_source: values.referralSource || null,
          emoji: values.emoji || null,
          rating: values.rating || null,
        },
      ])
      .select('id, name, message, sns_handle, region, age_group, referral_source, emoji, rating, created_at')
      .single();

    setIsSubmitting(false);

    if (error) {
      setSnackbar({ open: true, severity: 'error', message: '방명록 등록에 실패했어요.' });
      throw error;
    }

    setEntries((prev) => [data, ...prev]);
    setSnackbar({ open: true, severity: 'success', message: '방명록이 등록되었어요! 감사합니다 🎉' });
  };

  const handleSnackbarClose = () => {
    setSnackbar((prev) => ({ ...prev, open: false }));
  };

  return (
    <SectionContainer
      id="contact"
      title="Contact"
      description="편하게 연락 주세요! 이메일과 GitHub에서 만날 수 있어요."
      isAlt
    >
      <Stack spacing={6} alignItems="center" sx={{ mt: 5 }}>
        <Stack spacing={4} alignItems="center">
          <Card
            component="a"
            href={`mailto:${EMAIL}`}
            elevation={0}
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 1.5,
              px: { xs: 3, md: 4 },
              py: { xs: 2, md: 2.5 },
              borderRadius: '24px',
              textDecoration: 'none',
              bgcolor: 'background.paper',
              border: '2px solid',
              borderColor: 'primary.light',
              boxShadow: '0 6px 0 0 rgba(106, 90, 205, 0.25)',
              transition: 'transform 0.2s cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 0.2s ease',
              '&:hover': {
                transform: 'translateY(-4px) scale(1.03)',
                boxShadow: '0 10px 0 0 rgba(106, 90, 205, 0.25)',
              },
            }}
          >
            <EmailRoundedIcon sx={{ color: 'primary.main', fontSize: { xs: 26, md: 30 } }} />
            <Typography
              sx={{
                fontSize: { xs: '1rem', md: '1.15rem' },
                fontWeight: 600,
                color: 'text.primary',
              }}
            >
              {EMAIL}
            </Typography>
          </Card>

          <Stack direction="row" spacing={2}>
            <IconButton
              component="a"
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub 프로필로 이동"
              sx={{
                width: { xs: 52, md: 60 },
                height: { xs: 52, md: 60 },
                bgcolor: '#FEE500',
                color: '#08060d',
                transition: 'transform 0.25s cubic-bezier(0.34, 1.56, 0.64, 1)',
                '&:hover': {
                  bgcolor: '#FEE500',
                  transform: 'scale(1.15) rotate(-8deg)',
                },
              }}
            >
              <GitHubIcon sx={{ fontSize: { xs: 26, md: 30 } }} />
            </IconButton>
          </Stack>
        </Stack>

        <Stack spacing={3} sx={{ width: '100%', maxWidth: 640 }}>
          <GuestbookForm onSubmit={handleGuestbookSubmit} isSubmitting={isSubmitting} />
          <GuestbookList entries={entries} isLoading={isLoadingEntries} />
        </Stack>
      </Stack>

      <Snackbar open={snackbar.open} autoHideDuration={3000} onClose={handleSnackbarClose}>
        <Alert onClose={handleSnackbarClose} severity={snackbar.severity} sx={{ width: '100%' }}>
          {snackbar.message}
        </Alert>
      </Snackbar>
    </SectionContainer>
  );
}

export default ContactSection;
