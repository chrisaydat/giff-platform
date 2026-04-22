'use client';

import { useState } from 'react';
import { loginHistory, preferenceRows } from '../lib/member-demo-data';

export default function SettingsPage() {
  const [twoFactorEnabled, setTwoFactorEnabled] = useState(true);
  const [visibility, setVisibility] = useState<'public' | 'limited' | 'private'>('limited');
  const [preferences, setPreferences] = useState(() => preferenceRows.map((row) => ({ ...row })));

  function updatePreference(index: number, field: 'email' | 'sms') {
    setPreferences((current) =>
      current.map((row, rowIndex) =>
        rowIndex === index ? { ...row, [field]: !row[field] } : row,
      ),
    );
  }

  return (
    <>
      <section className="member-hero">
        <div className="member-hero-copy">
          <div className="member-eyebrow">Preferences</div>
          <h1 className="member-display">Settings & Security</h1>
          <p className="member-lead">Manage your institutional access, communication preferences, and directory visibility.</p>
        </div>
      </section>

      <section className="member-grid member-grid-settings">
        <div className="member-stack">
          <article className="member-surface">
            <div className="member-panel-heading">
              <div>
                <h2>Account Security</h2>
                <p>Monitor the controls protecting your member archive.</p>
              </div>
            </div>

            <div className="member-list">
              <div className="member-list-item method">
                <div>
                  <strong>Password</strong>
                  <p>Last updated 4 months ago.</p>
                </div>
                <button type="button" className="member-secondary-button">Update Password</button>
              </div>

              <div className="member-list-item method">
                <div>
                  <strong>Two-Factor Authentication</strong>
                  <p>Adds an additional confirmation layer to your account.</p>
                </div>
                <button
                  type="button"
                  className={`member-toggle${twoFactorEnabled ? ' enabled' : ''}`}
                  aria-pressed={twoFactorEnabled}
                  onClick={() => setTwoFactorEnabled((value) => !value)}
                >
                  <span />
                </button>
              </div>

              <div className="member-list-item security-list">
                <div>
                  <strong>Login History</strong>
                  <p>Recent devices that accessed this member account.</p>
                </div>
              </div>

              <div className="member-table-wrap">
                <table className="member-table">
                  <thead>
                    <tr>
                      <th>Device / Location</th>
                      <th>Date & Time</th>
                    </tr>
                  </thead>
                  <tbody>
                    {loginHistory.map((entry) => (
                      <tr key={`${entry.device}-${entry.time}`}>
                        <td>
                          <strong>{entry.device}</strong>
                          <div className="member-table-note">{entry.location}</div>
                        </td>
                        <td>{entry.time}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </article>

          <article className="member-surface">
            <div className="member-panel-heading">
              <div>
                <h2>Notification Preferences</h2>
                <p>Choose how the institution should contact you.</p>
              </div>
            </div>

            <div className="member-table-wrap">
              <table className="member-table">
                <thead>
                  <tr>
                    <th>Preference</th>
                    <th>Email</th>
                    <th>SMS</th>
                  </tr>
                </thead>
                <tbody>
                  {preferences.map((row, index) => (
                    <tr key={row.label}>
                      <td>
                        <strong>{row.label}</strong>
                        <div className="member-table-note">{row.description}</div>
                      </td>
                      <td>
                        <label className="member-checkbox">
                          <input
                            type="checkbox"
                            checked={row.email}
                            onChange={() => updatePreference(index, 'email')}
                            aria-label={`${row.label} email preference`}
                          />
                          <span />
                        </label>
                      </td>
                      <td>
                        <label className="member-checkbox">
                          <input
                            type="checkbox"
                            checked={row.sms}
                            onChange={() => updatePreference(index, 'sms')}
                            aria-label={`${row.label} SMS preference`}
                          />
                          <span />
                        </label>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </article>

          <div className="member-footer-actions">
            <button type="button" className="member-secondary-button">Discard Changes</button>
            <button type="button" className="member-action-button">Save Preferences</button>
          </div>
        </div>

        <div className="member-stack">
          <article className="member-surface">
            <div className="member-panel-heading compact">
              <div>
                <h2>Profile Visibility</h2>
                <p>Control what appears in the institutional directory.</p>
              </div>
            </div>

            <div className="member-list">
              {[
                { key: 'public', label: 'Public', note: 'Full profile visible to all directory members.' },
                { key: 'limited', label: 'Limited', note: 'Only name, title, and primary institution are visible.' },
                { key: 'private', label: 'Private', note: 'Profile hidden from the member directory.' },
              ].map((option) => (
                <label key={option.key} className={`member-radio-card${visibility === option.key ? ' active' : ''}`}>
                  <input
                    type="radio"
                    name="profile_visibility"
                    checked={visibility === option.key}
                    onChange={() => setVisibility(option.key as 'public' | 'limited' | 'private')}
                  />
                  <div>
                    <strong>{option.label}</strong>
                    <p>{option.note}</p>
                  </div>
                </label>
              ))}
            </div>
          </article>

          <article className="member-dark-panel">
            <div className="member-panel-heading compact dark">
              <div>
                <h2>Institutional Support</h2>
                <p>Need assistance with documents or technical access?</p>
              </div>
            </div>

            <div className="member-stack">
              <button type="button" className="member-secondary-button full">Open a Support Ticket</button>
              <button type="button" className="member-outline-button full">Contact GIFF Secretary</button>
            </div>
          </article>
        </div>
      </section>
    </>
  );
}
