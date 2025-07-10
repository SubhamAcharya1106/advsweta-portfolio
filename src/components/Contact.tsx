import ContactForm from '../components/ContactForm';

export default function ContactPage() {
  return (
    <div style={{ textAlign: 'center', marginTop: '2rem' }}>
      <h1
style={{
            fontSize: '3rem',
            fontWeight: 'bold',
            color: '#2563eb',
            marginBottom: '1rem',
          }}
        >
        Need Help? </h1>
      <h2
      style={{
            fontSize: '2rem',
            fontWeight: 'bold',
            color: '#2563eb',
            marginBottom: '1rem',
          }}
          >
        
        Please fill the form below and let me get back to you</h2>
      <ContactForm />
    </div>
  )
}